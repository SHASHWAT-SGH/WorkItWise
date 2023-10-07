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
    
    def get_user(self, email):
        sql = f"SELECT USER_PASSWORD FROM USERS WHERE USER_EMAIL = '{email}'"
        __cursor.execute(sql)
        result = __cursor.fetchall()
        if len(result) == 0:
            return None
        else:
            return result[0][0]
        
    def get_username(self,email):
        sql = f"SELECT USER_NAME FROM USERS WHERE USER_EMAIL = '{email}'"
        __cursor.execute(sql)
        result = __cursor.fetchall()
        if len(result)==0:
            return None
        else:
            return result[0][0]
    

    
        