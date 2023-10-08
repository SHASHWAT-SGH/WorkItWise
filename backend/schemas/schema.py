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

class Exercise_category_and_img(BaseModel):
    category: str | None = None
    image_url: str | None = None

class Array_of_data_response(BaseModel):
    data: list | None = None

class Exercise_details(BaseModel):
    EXERCISE_NAME : str
    BODY_PART : str
    EQUIPMENT : str
    ANIMATED_IMAGE_URL : str
    TARGET_MUSCLE : str
    SECONDARY_MUSCLES : dict
    INSTRUCTIONS : dict