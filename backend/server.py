from fastapi import FastAPI, Depends
from sqlalchemy.orm import sessionmaker, Session

# importing schemas
from schemas import auth_schema
# importing modals and db items
from models.database_conn import Database_conn
from models.user_query import User_query

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
    user_queries.add_user(request.name, request.email, request.password)
    return {"success":True, "data":request}

# login
@app.get("/login")
def login(request: auth_schema.User_schema):
    pass