class Meta:
    def __init__(self,
                 programmer:str,
                 main: str,
                 description: str,
                 language: str,
                 libraries: list
                 ):
        self.programmer = programmer
        self.main = main
        self.description = description
        self.language = language
        self.libraries= libraries
        
    def to_json(self):
        return{
            "programmer": self.programmer,
            "main": self.main,
            "description": self.description,
            "language": self.language,
            "libraries": self.libraries,
        }
        
class Prediction:
    def __init__(self, pattern: str, tag: str, tagId: int, confidence: float):
        self.pattern = pattern
        self.tag = tag
        self.tagId = tagId
        self.confidence = confidence

    def __repr__(self) -> str:
        return f"<FARB Response: ${self.tag}>"

    def __str__(self) -> str:
        return f"<FARB Response: ${self.tag}>"

    def to_json(self):
        return {
            'pattern':  self.pattern,
            'tag':  self.tag,
            'tagId':  self.tagId,
            'confidence':  self.confidence,
        }
        
class Error:
    def __init__(self, field: str, message: str):
        self.field = field
        self.message = message
        
    def __repr__(self) -> str:
        return f"<Error: ${self.message}>"

    def __str__(self) -> str:
        return f"<Error: ${self.message}>"

    def to_json(self):
        return {
            'field':  self.field,
            'message':  self.message,
        }
        
class BotResponse:
    def __init__(self, message: str):
        self.message = message
        
    def __repr__(self) -> str:
        return f"<Bot Recommendation: ${self.message}>"

    def __str__(self) -> str:
        return f"<Bot Recommendation: ${self.message}>"

    def to_json(self):
        return {
            'message':  self.message,
        }