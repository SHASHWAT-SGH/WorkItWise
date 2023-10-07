import mysql.connector

class Database_conn:

    def __init__(self):
        global __mydb
        # Database configuration and connection
        # If connection is not successfull then it will RAISE AN EXCEPTION
        __mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Qwerty@123",
            database="workitwise"
        )

    def get_cursor(self):
        return __mydb.cursor()
    
    def reconnect_and_get_cursor(self):
        global __mydb
        # If connection is not successfull then it will RAISE AN EXCEPTION
        __mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Qwerty@123"
        )
        return __mydb.cursor()
    
    def get_db_conn(self):
        return __mydb
        

    
