from pydantic import BaseModel


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
