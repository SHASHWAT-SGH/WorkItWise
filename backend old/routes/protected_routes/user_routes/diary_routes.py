from fastapi import APIRouter, status, Request

from schema.response.global_response import Response_success_with_msg
from schema.request.user.diary.req_diary_schema import Create_diary
from schema.response.diary.diary_response import Array_of_diary_details_response

from controllers.user.diary.diary_controller import create_user_new_diary, get_all_user_diaries

diary_router = APIRouter()

@diary_router.post("/create" ,response_model=Response_success_with_msg ,status_code=status.HTTP_200_OK)
def create_user_new_diary_(state_request: Request,request:Create_diary):
    return create_user_new_diary(request, state_request.state.decoded_jwt)

@diary_router.get("/get/diaries", response_model=Array_of_diary_details_response, status_code=status.HTTP_200_OK)
def get_all_user_diaries_(state_request: Request):
    user_id = state_request.state.decoded_jwt.user_id
    return get_all_user_diaries(user_id)