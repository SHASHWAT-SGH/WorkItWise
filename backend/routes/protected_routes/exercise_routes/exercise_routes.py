from fastapi import APIRouter

from schema.response.global_response import Array_of_data_response

from controllers.exercises.exercise_controller import (
    get_all_exercise_categories,
    get_exercise_by_category,
)

exercise_router = APIRouter()


@exercise_router.get(
    "/get/allexercisecategories", response_model=Array_of_data_response
)
def get_all_exercise_categories_():
    return get_all_exercise_categories()


@exercise_router.get("/get/exercisebycategory", response_model=Array_of_data_response)
def get_exercise_by_category_(category: str):
    return get_exercise_by_category(category)
