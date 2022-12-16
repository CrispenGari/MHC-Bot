from flask import Blueprint, make_response, jsonify, request
from random import choice
from api.models import *
from api.models.pytorch import *

blueprint = Blueprint("blueprint", __name__)

@blueprint.route('/v1/chat', methods=["POST"]) 
def chat():
    data = {"success": False}
    if request.method == "POST":
        try:
            if request.is_json:
                json = request.get_json(force=True)
                if json.get("message"):
                    res = predict_tag(mhcb_model, json.get("message"), device)
                    intent = list(filter(lambda x: x['tag'] == res.tag, intents))[0]
                    message = choice(
                        intent['responses']
                    )
                    data = {
                        'success': True,
                        'prediction': res.to_json(),
                        'response': BotResponse(message=message).to_json() 
                    }  
                else:
                    data['error']  = "you should pass the 'text' in your json body while making this request."
            else:
                raise Exception("the is no json data in your request.")
        except Exception as e:
            print(e)
            data['error'] = 'something went wrong on the server'
    else:
        data['error']  = "the request method should be post only."        
    return make_response(jsonify(data)), 200
    
    