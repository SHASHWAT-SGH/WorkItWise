# db
from models.db_conn import my_db, my_db_cursor


def add_user_to_db(name, email, password):
    sql = "INSERT INTO USERS (USER_NAME, USER_EMAIL, USER_PASSWORD) VALUES (%s, %s, %s)"
    val = (name, email, password)
    my_db_cursor.execute(sql, val)
    my_db.commit()


def get_user_password_from_db(email):
    sql = f"SELECT USER_NAME, USER_PASSWORD FROM USERS WHERE USER_EMAIL = '{email}'"
    my_db_cursor.execute(sql)
    result = my_db_cursor.fetchall()
    if len(result) == 0:
        return None
    else:
        return {"user_name": result[0][0], "user_pass": result[0][1]}


def get_user_info_using_already_hashed_pass(email, password):
    sql = f"SELECT * FROM USERS WHERE USER_EMAIL = '{email}' AND USER_PASSWORD = '{password}'"
    my_db_cursor.execute(sql)
    result = my_db_cursor.fetchall()
    if len(result) == 0:
        return None
    else:
        return result[0]