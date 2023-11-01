from fastapi import APIRouter, status

from routes.protected_routes.user_routes.diary_routes import diary_router

user_router = APIRouter()

user_router.include_router(diary_router, prefix="/diary")

