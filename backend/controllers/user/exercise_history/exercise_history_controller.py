from fastapi import HTTPException, status

from schema.response.global_response import Response_success_with_msg

from models.diary_models import validate_diary_id
from models.exercise_history_models import add_exercise_to_history

def add_exercise_history(request, user_id):
    valid = validate_diary_id(user_id, request.diary_id)
    if not valid:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid diary id")
    # add to db
    valid = add_exercise_to_history(request.diary_id, request.exercise_date, request.exercise_id, request.repetitions)
    if not valid:
        raise HTTPException(status_code=status.WS_1003_UNSUPPORTED_DATA, detail="Invalid data")
    return Response_success_with_msg(success=True, msg="Added to history.")