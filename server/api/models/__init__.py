import torch
import os
import json
from torch.nn import functional as F
import numpy as np
from api.types import *
import spacy

# torch device
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Model name
MODEL_NAME = "mhcb-model.pt"
# Model paths
PYTORCH_MHCB_MODEL_PATH = os.path.join(os.getcwd(),
                                      f"api/models/static/{MODEL_NAME}"
                                      )

# STATIC FILE NAMES
INTENTS = 'intents.json'
LABELS = 'labels_dict.json'
VOCAB = 'vocab.json'
# STATIC FILE PATHS

INTENTS_PATH = os.path.join(os.getcwd(),f"api/models/static/{INTENTS}")
LABELS_PATH = os.path.join(os.getcwd(),f"api/models/static/{LABELS}")
VOCAB_PATH = os.path.join(os.getcwd(),f"api/models/static/{VOCAB}")

# loading static files

def customize_intents(intent):
    return {
        'responses': intent['responses'],
        'tag': intent['tag'].lower()
    }
with open(INTENTS_PATH, 'r') as reader:
    intents = list(map(customize_intents, json.load(reader)["intents"]))
    
with open(LABELS_PATH, 'r') as reader:
    labels_dict = json.load(reader)
    
with open(VOCAB_PATH, 'r') as reader:
    stoi = json.load(reader)
    
# SPECIAL TOKENS
PAD_TOKEN = '<pad>'
SOS_TOKEN = '<sos>'
UNK_TOKEN = '<unk>'
EOS_TOKEN = '<eos>'

# Tokenizer
print(" ✅ LOADING TOKENIZER FROM SPACY(en_core_web_sm)!\n")
spacy_en = spacy.load('en_core_web_sm')
print(" ✅ LOADING TOKENIZERS DONE!\n")

def tokenize_en(sent: str) -> list:
    return [tok.text for tok in spacy_en.tokenizer(sent)]

def text_pipeline(x: str):
    values = list()
    tokens = tokenize_en(x.lower()) # convert to lower case.
    for token in tokens:
        try:
            v = stoi[token]
        except KeyError as e:
            v = stoi[UNK_TOKEN]
        values.append(v)
    return values

def inference_preprocess_text(text, max_len=100, padding="pre"):
    assert padding=="pre" or padding=="post", "the padding can be either pre or post"
    text_holder = torch.zeros(max_len, dtype=torch.int32) # fixed size tensor of max_len with  = 0
    processed_text = torch.tensor(text_pipeline(text), dtype=torch.int32)
    pos = min(max_len, len(processed_text))
    if padding == "pre":
        text_holder[:pos] = processed_text[:pos]
    else:
        text_holder[-pos:] = processed_text[-pos:]
    text_list= text_holder.unsqueeze(dim=0)
    return text_list

def predict_tag(model, sentence, device): 
    model.eval()
    with torch.no_grad():
        tensor = inference_preprocess_text(sentence).to(device)
        length = torch.tensor([len(t) for t in tensor])
        probabilities = torch.softmax(model(tensor, length).squeeze(0), dim=0)
        prediction = torch.argmax(probabilities)
        prediction = prediction.detach().cpu().item()
        tags = {v:k for k, v in labels_dict.items()}
        tag = tags[prediction]
    
        return Prediction(
            sentence.lower(), tag, int(prediction), float(round(probabilities[prediction].item(), 2))
        )