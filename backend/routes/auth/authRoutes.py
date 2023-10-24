from fastapi import APIRouter, status, Depends

from typing import Annotated
from fastapi.security import OAuth2PasswordRequestForm

from controllers.auth.auth_controller import signup, login

from schema.request.auth.req_auth_schema import User_signup
from schema.response.global_response import Response_success_with_msg
from schema.response.auth.res_auth_schema import Token_response

auth_router = APIRouter()


# signup
@auth_router.post(
    "/signup",
    status_code=status.HTTP_202_ACCEPTED,
    response_model=Response_success_with_msg,
)
def signup_(request: User_signup):
    return signup(request)


# login
@auth_router.post(
    "/login",
    status_code=status.HTTP_202_ACCEPTED,
    response_model=Token_response,
)
def login_(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    return login(form_data)
