# db
from models.db_conn import my_db, my_db_cursor

def add_diary(user_id, diary_name, description):
    sql = "INSERT INTO USER_DIARIES (USER_ID, DIARY_NAME, DIARY_DESCRIPTION) VALUES (%s, %s, %s)"
    val = (user_id, diary_name, description)
    my_db_cursor.execute(sql, val)
    if my_db_cursor.rowcount > 0:
        my_db.commit()
        return True
    else:
        return False


def validate_diary_id(user_id, diary_name):
    pass