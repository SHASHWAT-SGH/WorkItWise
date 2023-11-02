from fastapi import APIRouter, status

from routes.protected_routes.user_routes.diary_routes import diary_router
from routes.protected_routes.user_routes.exercise_history_routes import exercise_history_router


user_router = APIRouter()

user_router.include_router(diary_router, prefix="/diary")

user_router.include_router(exercise_history_router,  prefix="/exercise/history")