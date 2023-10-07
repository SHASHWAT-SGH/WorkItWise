from pydantic import BaseModel

class User_schema(BaseModel):
    name:str | None = None
    email:str | None = None
    passowrd:str | None = None

class User_login_schema(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None
    password: str | None = None

