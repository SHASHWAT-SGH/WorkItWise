from fastapi import HTTPException, status
import os
from fastapi.responses import FileResponse


def get_image(category: str):
    image_path = f"assets/images/muscle-grp-category/{category}.png"
    if os.path.exists(image_path):
        return FileResponse(image_path, media_type="image/png")
    else:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid image category",
        )


def get_gif_exerise(exercise_name):
    image_path = f"assets/images/gif/{exercise_name}.gif"
    if os.path.exists(image_path):
        return FileResponse(image_path, media_type="image/gif")
    else:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid gif url",
        )
