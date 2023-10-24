from fastapi import APIRouter, status, Depends

from typing import Annotated
from fastapi.security import OAuth2PasswordRequestForm
from utils.JWT.JWT_utils import JWT_utils

from controllers.auth.auth_controller import signup, login

from schema.request.auth.req_auth_schema import User_signup
from schema.request.auth.req_auth_schema import TokenData_req
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


jwt_obj = JWT_utils()


# hidden api
@auth_router.get(
    "/hidden",
    status_code=status.HTTP_200_OK,
)
def hidden(
    current_user: TokenData_req = Depends(jwt_obj.validate_jwt_and_get_current_user),
):
    if current_user:
        return current_user
    else:
        return {"success": False}
