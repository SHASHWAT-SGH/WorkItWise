import mysql.connector

mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Qwerty@123",
            database="workitwise"
        )

my_cursor = mydb.cursor()

def write_to_file(file_name, content):
    try:
        fout = open(file_name+".txt","a")
        fout.write(content+"\n")
        fout.close()
    except Exception as e:
        print("unknow symbol: ",e)

def insert(CATEGORY, IMAGE_URL):
    try:
        sql = f"INSERT INTO CATEGORIES (CATEGORY, IMAGE_URL) VALUES('{CATEGORY}', '{IMAGE_URL}')"
        my_cursor.execute(sql)
        mydb.commit()
        print("success")
    except Exception as e:
        write_to_file(CATEGORY+"_failed", sql)
        print("\n\n\nfailed: \n"+ sql + "\n"+ str(e))

def main():
    l = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]
    for i in l:
        path = "muscle-grp-category/" + i.replace(" ", "")
        i.replace(" ", "")
        insert(i,path)

main()