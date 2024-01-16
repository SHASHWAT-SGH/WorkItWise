from fastapi import HTTPException, status
from schema.response.global_response import Array_of_data_response
from schema.response.exercise.exercise_response import (
    Exercise_category_and_img,
    Exercise_details_response,
)

import json

from models.exercise_models import get_all_categories, get_exercise_by_category_from_db


def get_all_exercise_categories():
    result = get_all_categories()
    l = []
    for i in range(len(result)):
        temp = Exercise_category_and_img(
            id=result[i][0], category=result[i][1], image_url=result[i][2]
        )
        l.append(temp)
    return Array_of_data_response(data=l)


def get_exercise_by_category(category):
    try:
        result = get_exercise_by_category_from_db(category)
    except:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid category",
        )
    l = []
    for i in range(len(result)):
        temp = Exercise_details_response(
            exercise_id=result[i][0],
            exercise_name=result[i][1],
            category_id=result[i][2],
            equipment=result[i][3],
            animated_image_url=result[i][4],
            target_muscle=result[i][5],
            secondary_muscles=json.loads(result[i][6]),
            instructions=json.loads(result[i][7]),
            unit=result[i][8],
        )
        l.append(temp)
    return Array_of_data_response(data=l)
