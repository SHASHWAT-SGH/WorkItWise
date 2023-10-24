from pydantic import BaseModel, validator
from utils.validators import is_valid_password


class User_signup(BaseModel):
    name: str
    email: str
    password: str

    @validator("password")
    def validate_pass(cls, password):
        return is_valid_password(password)


class TokenData_req(BaseModel):
    user_email: str
    user_password: str
