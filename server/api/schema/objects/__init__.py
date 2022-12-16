import graphene

class BotPrediction(graphene.ObjectType):
    confidence = graphene.Field(graphene.Float, required=True)
    tag = graphene.Field(graphene.String, required=True)
    tagId = graphene.Field(graphene.Int, required=True)
    pattern = graphene.Field(graphene.String, required=True)
    
class BotResponse(graphene.ObjectType):
    message = graphene.Field(graphene.String, required=True)
    
class ErrorType(graphene.ObjectType):
    field = graphene.String(required=True)
    message = graphene.String(required = True)
    
class ChatWithBotResponse(graphene.ObjectType):
    success = graphene.Field(graphene.Boolean, required=True)
    prediction = graphene.Field(BotPrediction, required=False)
    error = graphene.Field(ErrorType, required=False)
    response = graphene.Field(BotResponse, required=False)

class MetaResponse(graphene.ObjectType):
    description = graphene.String(required=True)
    language = graphene.String(required=True)
    libraries = graphene.NonNull(graphene.List(graphene.String))
    main = graphene.String(required=True)
    programmer = graphene.String(required=True)