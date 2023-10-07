from typing import List, Optional
from pydantic import BaseModel


class User_schema(BaseModel):
    name: str
    email: str
    password: str
