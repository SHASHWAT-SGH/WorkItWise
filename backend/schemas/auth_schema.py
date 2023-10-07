from pydantic import BaseModel


class User_schema(BaseModel):
    name: str
    email: str
    password: str

class User_login_schema(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

class Temp_Schema(BaseModel):
    email:str