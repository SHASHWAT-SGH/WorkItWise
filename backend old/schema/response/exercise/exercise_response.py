from pydantic import BaseModel
from datetime import date
from typing import List

class Exercise_category_and_img(BaseModel):
    id: int
    category: str | None = None
    image_url: str | None = None


class Exercise_details_response(BaseModel):
    exercise_id: int
    exercise_name: str
    category_id: int
    equipment: str
    animated_image_url: str
    target_muscle: str
    secondary_muscles: dict
    instructions: dict
    unit: str

class Exercise_history_response(BaseModel):
    exercise_date: date
    repetitions: str
    exercise_name: str
    equipment: str
    animated_image_url: str
    target_muscle: str
    secondary_muscles : dict
    instructions : dict
    unit: str
    category: str
    image_url: str

class Array_of_Exercise_history_response(BaseModel):
    data: List[Exercise_history_response] | None = None

