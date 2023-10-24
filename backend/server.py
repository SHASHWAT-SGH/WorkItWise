from fastapi import FastAPI, Depends
from routes.auth.authRoutes import auth_router
from routes.unprotected_routes.images_routes import image_router

from routes.protected_routes.protected_routes import protected_router

from utils.JWT.JWT_bearer import JWT_brearer

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

app.include_router(
    protected_router, prefix="/api", dependencies=[Depends(JWT_brearer())]
)
