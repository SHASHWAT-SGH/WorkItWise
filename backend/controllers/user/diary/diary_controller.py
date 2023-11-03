from fastapi import HTTPException, status

from schema.response.global_response import Response_success_with_msg
from schema.response.diary.diary_response import Diary_details_response, Array_of_diary_details_response

from models.diary_models import add_diary, get_all_diary_list

def create_user_new_diary(request, decoded_jwt):
    if(add_diary(decoded_jwt.user_id,request.diary_name, request.diary_description)):
        return Response_success_with_msg(success=True, msg="Diary created.")
    else:
        raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN, detail="Already exists!"
                )
        
def get_all_user_diaries(user_id):
    result = get_all_diary_list(user_id)
    data = []
    for i in result:
        data.append(Diary_details_response(diary_name=i[0], diary_description=i[1]))
    return Array_of_diary_details_response(data=data)

