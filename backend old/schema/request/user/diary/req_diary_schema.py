from pydantic import BaseModel

class Create_diary(BaseModel):
    diary_name: str
    diary_description: str