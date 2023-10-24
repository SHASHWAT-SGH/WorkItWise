from fastapi import FastAPI
from routes.auth.authRoutes import auth_router
from routes.unprotected_routes.images_routes import image_router

# batabase connection
from models.db_conn import my_db  # it connects to db

# initialize fastapi app
app = FastAPI()


@app.get("/")
def get_root_page():
    return {"details": "home page"}


# authentication routes : login, signup
app.include_router(auth_router, prefix="/auth")

# media routes: images and gif
app.include_router(image_router, prefix="/media")
