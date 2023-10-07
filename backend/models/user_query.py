class User_query:

    global __cursor
    global __mydb

    def __init__(self, cursor, db):
        global __cursor
        global __mydb
        __cursor = cursor
        __mydb = db

    def add_user(self, name, email, password):
        sql = "INSERT INTO USERS (USER_NAME, USER_EMAIL, USER_PASSWORD) VALUES (%s, %s, %s)"
        val = (name, email,password)
        __cursor.execute(sql, val)
        __mydb.commit()

    
        