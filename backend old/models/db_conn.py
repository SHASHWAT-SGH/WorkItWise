import mysql.connector

# connect to db
try:
    my_db = mysql.connector.connect(
        host="localhost", user="root", password="Qwerty@123", database="workitwise"
    )
    my_db_cursor = my_db.cursor()
    print("------- Database connection SUCCESS -------")
except:
    print("------- UNABLE to connect to database! -------")

__all__ = [my_db, my_db_cursor]
