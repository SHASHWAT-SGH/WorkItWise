from pydantic import BaseModel


class Token_response(BaseModel):
    user_name: str
    access_token: str
    token_type: str
