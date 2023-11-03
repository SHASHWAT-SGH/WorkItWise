from fastapi import HTTPException, status

from schema.response.global_response import Response_success_with_msg
from schema.response.exercise.exercise_response import Array_of_Exercise_history_response
from schema.response.exercise.exercise_response import Exercise_history_response

from models.diary_models import validate_diary_id
from models.exercise_history_models import add_exercise_to_history
from models.exercise_history_models import get_all_history, get_history_by_date

import json

def add_exercise_history(request, user_id):
    valid = validate_diary_id(user_id, request.diary_id)
    if not valid:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid diary id")
    # add to db
    valid = add_exercise_to_history(request.diary_id, request.exercise_date, request.exercise_id, request.repetitions)
    if not valid:
        raise HTTPException(status_code=status.WS_1003_UNSUPPORTED_DATA, detail="Invalid data")
    return Response_success_with_msg(success=True, msg="Added to history.")

def get_whole_exercise_history(diary_id,user_id):
    valid = validate_diary_id(user_id, diary_id)
    if not valid:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid diary id")
    result = get_all_history(diary_id)
    data = []
    for i in result:
        temp = Exercise_history_response(
            exercise_date= i[2],
            repetitions= i[4],
            exercise_name= i[6],
            equipment= i[8],
            animated_image_url= i[9],
            target_muscle= i[10],
            secondary_muscles=  json.loads(i[11]),
            instructions=  json.loads(i[12]),
            unit= i[13],
            category= i[15],
            image_url= i[16],
        )
        data.append(temp)
    return Array_of_Exercise_history_response(data=data)

def get_exercise_history_by_date(diary_id,history_date,user_id):
    valid = validate_diary_id(user_id, diary_id)
    if not valid:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid diary id")
    result = get_history_by_date(diary_id, history_date)
    data = []
    for i in result:
        temp = Exercise_history_response(
            exercise_date= i[2],
            repetitions= i[4],
            exercise_name= i[6],
            equipment= i[8],
            animated_image_url= i[9],
            target_muscle= i[10],
            secondary_muscles=  json.loads(i[11]),
            instructions=  json.loads(i[12]),
            unit= i[13],
            category= i[15],
            image_url= i[16],
        )
        data.append(temp)
    return Array_of_Exercise_history_response(data=data)


