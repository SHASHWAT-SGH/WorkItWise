from pydantic import BaseModel
from typing import List

class Diary_details_response(BaseModel):
    diary_id: int
    diary_name: str
    diary_description: str

class Array_of_diary_details_response(BaseModel):
    data: List[Diary_details_response] | None = None