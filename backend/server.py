from fastapi import FastAPI
from routes.auth.authRoutes import auth_router

# batabase connection
from models.db_conn import my_db  # it connected to db

# initialize fastapi app
app = FastAPI()


@app.get("/")
def get_root_page():
    return {"details": "home page"}


# authentication routes : login, signup
app.include_router(auth_router, prefix="/auth")
