import mysql.connector
import json
from ALLDATA import Data

mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Qwerty@123",
            database="workitwise"
        )

my_cursor = mydb.cursor()

def create_json_string(data):
    json_data = {}
    for i in range(len(data)):
        json_data[i+1] = data[i]
    json_string = json.dumps(json_data)
    return json_string

def generate_animated_image_url(index, category, exercise_name):
    my_str =  category.replace(" ","")+"/"+str(index)+exercise_name.replace(" ","").replace("/","-")
    return my_str

def write_to_file(file_name, content):
    try:
        fout = open(file_name+".txt","a")
        fout.write(content+"\n")
        fout.close()
    except Exception as e:
        print("unknow symbol: ",e)

def insert_into_db_and_write_to_file(EXERCISE_NAME, CATEGORY_ID, EQUIPMENT, ANIMATED_IMAGE_URL, TARGET_MUSCLE, SECONDARY_MUSCLES, INSTRUCTIONS, UNIT):
    try:
        sql = f"INSERT INTO EXERCISE_INFORMATION (EXERCISE_NAME, CATEGORY_ID, EQUIPMENT, ANIMATED_IMAGE_URL, TARGET_MUSCLE, SECONDARY_MUSCLES, INSTRUCTIONS, UNIT) VALUES('{EXERCISE_NAME}',{CATEGORY_ID}, '{EQUIPMENT}', '{ANIMATED_IMAGE_URL}', '{TARGET_MUSCLE}', '{SECONDARY_MUSCLES}', '{INSTRUCTIONS}', '{UNIT}')"
        my_cursor.execute(sql)
        mydb.commit()
        write_to_file(str(CATEGORY_ID)+"_success", sql)
        print("success")
    except Exception as e:
        write_to_file(str(CATEGORY_ID)+"_failed", sql)
        print("\n\n\nfailed\n" +str(e)+"\n")

def get_category_id(category):
    sql = f"SELECT CATEGORY_ID FROM CATEGORIES WHERE CATEGORY = '{category}'"
    my_cursor.execute(sql)
    ans = my_cursor.fetchall()[0][0]
    return ans

def main(data):

    for i in range(len(data)):
        curernt_data = data[i]
        EXERCISE_NAME = curernt_data["name"]
        CATEGORY_ID = get_category_id(curernt_data["bodyPart"])
        EQUIPMENT = curernt_data["equipment"]
        ANIMATED_IMAGE_URL = generate_animated_image_url(i+1,curernt_data["bodyPart"],EXERCISE_NAME)
        TARGET_MUSCLE = curernt_data["target"]
        SECONDARY_MUSCLES = create_json_string(curernt_data["secondaryMuscles"])
        INSTRUCTIONS = create_json_string(curernt_data["instructions"])
        UNIT = "null"
        insert_into_db_and_write_to_file(EXERCISE_NAME, CATEGORY_ID, EQUIPMENT, ANIMATED_IMAGE_URL, TARGET_MUSCLE, SECONDARY_MUSCLES, INSTRUCTIONS, UNIT)

# main(Data.neck)
# main(Data.back)
# main(Data.cardio)
# main(Data.chest)
# main(Data.lower_arms) 
# main(Data.lower_legs)
# main(Data.shoulders)
# main(Data.upper_arms)
# main(Data.upper_legs)
# main(Data.waist)