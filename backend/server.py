from fastapi import FastAPI, Depends, HTTPException, status
from typing import Annotated
from datetime import datetime, timedelta
#hashing
from passlib.context import CryptContext
# importing schemas
from schemas import auth_schema
# importing modals and db items
from models.database_conn import Database_conn
from models.user_query import User_query
#jwt
from fastapi.security import  OAuth2PasswordRequestForm
from utils import JWT

# --------------------------------------------------------------------------------

# initialize fastapi app
app = FastAPI()

# connect to db
try:
    db_conn = Database_conn()
    print("------- Database connection SUCCESS -------")
except:
    print("------- UNABLE to connect to database! -------")
# get cursor from db
db_cursor = db_conn.get_cursor()
user_queries =  User_query(db_cursor, db_conn.get_db_conn())

# root url
@app.get("/")
def get_home_page():
    return {"data": "success"}


# create user
@app.post("/signup")
def signup(request: auth_schema.User_schema):
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    hashed_password = pwd_context.hash(request.password)
    user_queries.add_user(request.name, request.email, hashed_password)
    return {"success":True, "data":request}

# login
@app.post("/login")
def login(request: auth_schema.User_login_schema):
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    hashed_pass_from_db = user_queries.get_user(request.email)
    if hashed_pass_from_db == None:
        return{"success":False}
    match = pwd_context.verify(request.password, hashed_pass_from_db)
    if(match):
        return{"success":True}
    else:
        return{"success":False}

@app.post("/token", response_model=auth_schema.Token)
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
):
    user = user_queries.get_username(form_data.username)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = JWT.create_access_token(
        data={"sub": user}
    )
    return {"access_token": access_token, "token_type": "bearer"}