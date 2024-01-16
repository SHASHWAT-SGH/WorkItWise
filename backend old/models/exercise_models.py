# db
from models.db_conn import my_db, my_db_cursor


def get_all_categories():
    sql = "SELECT * FROM CATEGORIES"
    my_db_cursor.execute(sql)
    result = my_db_cursor.fetchall()
    return result


def get_exercise_by_category_from_db(category):
    sql = f"SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY = '{category}'"
    my_db_cursor.execute(sql)
    result = my_db_cursor.fetchone()
    category_id = result[0]
    sql = f"SELECT * FROM  EXERCISE_INFORMATION WHERE CATEGORY_ID = {category_id}"
    my_db_cursor.execute(sql)
    result = my_db_cursor.fetchall()
    return result
