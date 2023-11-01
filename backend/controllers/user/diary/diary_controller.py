from fastapi import HTTPException, status

from schema.response.global_response import Response_success_with_msg

from models.diary_models import add_diary

def create_user_new_diary(request, decoded_jwt):
    print(decoded_jwt)
    if(add_diary(decoded_jwt.user_id,request.diary_name, request.diary_description)):
        return Response_success_with_msg(success=True, msg="Diary created.")
    else:
        raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN, detail="Already exists!"
                )
        