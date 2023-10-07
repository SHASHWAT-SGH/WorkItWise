from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
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
@app.post("/login", response_model=auth_schema.Token)
def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    hashed_pass_from_db = user_queries.get_user_password(form_data.username)
    if hashed_pass_from_db == None:
        # user not found
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Incorrect username",
            headers={"WWW-Authenticate": "Bearer"},
        )
    match = pwd_context.verify(form_data.password, hashed_pass_from_db)
    if(match):
        access_token = JWT.create_access_token(
        data={"sub": form_data.username}
        )
        return {"access_token": access_token, "token_type": "bearer"}
    else:
        # Incorrect password
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect password",
            headers={"WWW-Authenticate": "Bearer"},
        )

@app.get("/hidden")
def hidden(current_user: auth_schema.Temp_Schema = Depends(JWT.validate_jwt_and_get_current_user)):
    return current_user
