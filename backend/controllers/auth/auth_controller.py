from fastapi import HTTPException, status

# hashing and jwt
from passlib.context import CryptContext
from utils.JWT.JWT_handler import create_access_token

# models
from models.user_models import add_user_to_db, get_user_password_from_db

# schema
from schema.response.global_response import Response_success_with_msg
from schema.response.auth.res_auth_schema import Token_response


def signup(request):
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    hashed_password = pwd_context.hash(request.password)
    add_user_to_db(request.name, request.email, hashed_password)
    return Response_success_with_msg(success=True, msg="Account created successfully.")


def login(request):
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    data_from_db = get_user_password_from_db(request.email)
    if data_from_db == None:
        # user not found
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Incorrect username",
            headers={"WWW-Authenticate": "Bearer"},
        )
    hashed_pass_from_db = data_from_db["user_pass"]
    user_name = data_from_db["user_name"]
    match = pwd_context.verify(request.password, hashed_pass_from_db)
    if match:
        access_token = create_access_token(
            data={"username": request.email, "password": hashed_pass_from_db}
        )
        return Token_response(
            user_name=user_name, access_token=access_token, token_type="bearer"
        )

    else:
        # Incorrect password
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect password",
            headers={"WWW-Authenticate": "Bearer"},
        )
