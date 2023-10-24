from fastapi import APIRouter, status
from controllers.images.media_controllers import get_image, get_gif_exerise

image_router = APIRouter()


# testing endpoint
@image_router.get("/test", status_code=status.HTTP_200_OK)
def temp():
    return {"test success": True}


@image_router.get("/image/musclegrp", status_code=status.HTTP_200_OK)
def get_image_(category: str):
    return get_image(category)


@image_router.get("/gif/exercise", status_code=status.HTTP_200_OK)
def get_gif_(exercise_name: str):
    return get_gif_exerise(exercise_name)
