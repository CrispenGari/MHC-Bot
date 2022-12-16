
import graphene
from api.schema.inputs import *
from api.schema.objects import *
from api.models import *
from api.models.pytorch import *
from random import choice

class Query(graphene.ObjectType):
    meta = graphene.Field(graphene.NonNull(MetaResponse))
    def resolve_meta(root, info):
        return  MetaResponse(
            description= "AI chatbot API that will behave and chat with human like a therapist.",
            language= "python",
            libraries= ["pytorch", "torchtext", "spacy"],
            main= "Mental Health Conversation Bot (Bot)",
            programmer= "@crispengari"
        )

class ChatWithBotMutation(graphene.Mutation):
    class Arguments:
        input=graphene.Argument(graphene.NonNull(ChatWithBotInputType))
    response = graphene.Field(ChatWithBotResponse, required=False)
    
    def mutate(self, info, input, **kwargs):
        try:
            res = predict_tag(mhcb_model, input.get('message'), device)
            intent = list(filter(lambda x: x['tag'] == res.tag, intents))[0]
            message = choice(
                intent['responses']
            )
            return ChatWithBotMutation(
                response = ChatWithBotResponse(
                    success = True,
                    response = BotResponse(
                        message = message
                    ),
                    prediction = BotPrediction(
                        confidence = res.confidence,
                        tag = res.tagId,
                        tagId = res.tagId,
                        pattern = res.pattern
                    )
                )
               
            )
        except Exception as e:
            print(e)
            ChatWithBotMutation(
                response = ChatWithBotResponse(
                    success = False,
                    error = ErrorType(
                        field = 'server',
                        message = "Something went wrong on the server."
                    )
                )
                
            )
       
class Mutation(graphene.ObjectType):
    chat = ChatWithBotMutation.Field()
    
schema = graphene.Schema(query=Query, mutation=Mutation)