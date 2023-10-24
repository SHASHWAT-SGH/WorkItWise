from pydantic import BaseModel


class Response_success_with_msg(BaseModel):
    success: bool
    msg: str


class Array_of_data_response(BaseModel):
    data: list | None = None
