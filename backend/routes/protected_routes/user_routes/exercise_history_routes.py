from fastapi import APIRouter, status, Request

from datetime import date

from schema.response.global_response import Response_success_with_msg
from schema.response.exercise.exercise_response import Array_of_Exercise_history_response
from schema.request.user.exercise.exercise_request import Exercise_history_request

from controllers.user.exercise_history.exercise_history_controller import add_exercise_history
from controllers.user.exercise_history.exercise_history_controller import get_whole_exercise_history, get_exercise_history_by_date

exercise_history_router = APIRouter()

@exercise_history_router.post("/add", response_model=Response_success_with_msg, status_code=status.HTTP_200_OK)
def add_exercise_history_(state_request: Request,request: Exercise_history_request):
    user_id = state_request.state.decoded_jwt.user_id
    return add_exercise_history(request,user_id)

@exercise_history_router.get("/get/all", response_model=Array_of_Exercise_history_response, status_code=status.HTTP_200_OK)
def get_whole_exercise_history_(state_request: Request,diary_id: int):
    user_id = state_request.state.decoded_jwt.user_id
    return get_whole_exercise_history(diary_id,user_id)

@exercise_history_router.get("/get/by/date", response_model=Array_of_Exercise_history_response, status_code=status.HTTP_200_OK)
def get_exercise_history_by_date_(state_request: Request,diary_id: int, exercise_date: date):
    user_id = state_request.state.decoded_jwt.user_id
    return get_exercise_history_by_date(diary_id,exercise_date,user_id)


