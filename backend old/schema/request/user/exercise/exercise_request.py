from pydantic import BaseModel
from datetime import date

class Exercise_history_request(BaseModel):
    diary_id: int
    exercise_date: date
    exercise_id: int
    repetitions: str