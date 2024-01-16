from pydantic import BaseModel


class Token_response(BaseModel):
    user_name: str
    access_token: str
    token_type: str


class User_Information(BaseModel):
    user_id: int
    user_name: str
    user_email: str
    user_password: str
