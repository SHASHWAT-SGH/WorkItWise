# db
from models.db_conn import my_db, my_db_cursor

def add_exercise_to_history(diary_id, exercise_date, exercise_id, repetitions):
    sql = "INSERT INTO EXERCISE_HISTORY (DIARY_ID, EXERCISE_DATE, EXERCISE_ID, REPETITIONS) VALUES (%s, %s, %s, %s)"
    val = (diary_id, exercise_date, exercise_id, repetitions)
    my_db_cursor.execute(sql, val)
    if my_db_cursor.rowcount > 0:
        my_db.commit()
        return True
    else:
        return False
    
def get_all_history(diary_id):
    sql = f"SELECT * FROM EXERCISE_HISTORY INNER JOIN EXERCISE_INFORMATION ON EXERCISE_INFORMATION.EXERCISE_ID = EXERCISE_HISTORY.EXERCISE_ID INNER JOIN CATEGORIES ON EXERCISE_INFORMATION.CATEGORY_ID = CATEGORIES.CATEGORY_ID  WHERE DIARY_ID = {diary_id}"
    my_db_cursor.execute(sql)
    result = my_db_cursor.fetchall()
    return result

def get_history_by_date(diary_id, history_date):
    sql = f"SELECT * FROM EXERCISE_HISTORY INNER JOIN EXERCISE_INFORMATION ON EXERCISE_INFORMATION.EXERCISE_ID = EXERCISE_HISTORY.EXERCISE_ID INNER JOIN CATEGORIES ON EXERCISE_INFORMATION.CATEGORY_ID = CATEGORIES.CATEGORY_ID  WHERE DIARY_ID = {diary_id} AND EXERCISE_DATE = '{str(history_date)+ ' 00:00:00'}'"
    my_db_cursor.execute(sql)
    result = my_db_cursor.fetchall()
    return result

