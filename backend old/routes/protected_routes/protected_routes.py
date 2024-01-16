from fastapi import APIRouter
from routes.protected_routes.exercise_routes.exercise_routes import exercise_router
from routes.protected_routes.user_routes.user_routes import user_router

protected_router = APIRouter()


@protected_router.get("/hidden")
def temp():
    return {"succ": True}


protected_router.include_router(exercise_router)
protected_router.include_router(user_router, prefix="/user", tags=["user routes"])