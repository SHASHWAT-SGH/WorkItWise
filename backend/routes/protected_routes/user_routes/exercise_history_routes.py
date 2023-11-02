from fastapi import APIRouter, status, Request

from schema.response.global_response import Response_success_with_msg
from schema.request.user.exercise.exercise_request import Exercise_history

from controllers.user.exercise_history.exercise_history_controller import add_exercise_history

exercise_history_router = APIRouter()

@exercise_history_router.post("/add", response_model=Response_success_with_msg, status_code=status.HTTP_200_OK)
def add_exercise_history_(state_request: Request,request: Exercise_history):
    user_id = state_request.state.decoded_jwt.user_id
    return add_exercise_history(request,user_id)
