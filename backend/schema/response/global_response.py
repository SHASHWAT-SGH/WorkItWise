from pydantic import BaseModel


class Response_success_with_msg(BaseModel):
    success: bool
    msg: str
