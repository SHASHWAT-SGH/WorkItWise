class Auth_query:

    #  no need till now just for testing ---------- can delete this file

    global __cursor
    global __mydb

    def __init__(self, cursor, db):
        global __cursor
        global __mydb
        __cursor = cursor
        __mydb = db

    def authenticate_user_with_password(self, email, password):
        sql = f"SELECT USER_PASSWORD FROM USERS WHERE USER_EMAIL = '{email}'"
        __cursor.execute(sql)
        result = __cursor.fetchall()
        if len(result) == 0:
            return None
        else:
            return result[0][0]
