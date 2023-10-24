class All_queries:

    global __cursor
    global __mydb

    def __init__(self, cursor, db):
        global __cursor
        global __mydb
        __cursor = cursor
        __mydb = db

    def get_all_categories(self):
        sql = "SELECT * FROM CATEGORIES"
        __cursor.execute(sql)
        result = __cursor.fetchall()
        return result
    
    def get_exercise_by_category(self, category):
        sql = f"SELECT * FROM EXERCISE_INFO WHERE BODY_PART = '{category}'"
        __cursor.execute(sql)
        result = __cursor.fetchall()
        return result
    
    def get_all_exercise(self):
        sql = "SELECT * FROM EXERCISE_INFO"
        __cursor.execute(sql)
        result = __cursor.fetchall()
        return result