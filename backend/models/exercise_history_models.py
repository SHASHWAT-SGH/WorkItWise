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