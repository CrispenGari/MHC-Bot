import graphene

class ChatWithBotInputType(graphene.InputObjectType):
    message = graphene.String(required=True)