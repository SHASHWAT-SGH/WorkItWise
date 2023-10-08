import mysql.connector
from ALLDATA import Data
import json

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

def generate_animated_image_url(index, bodyPart, exercise_name):
    my_str =  bodyPart.replace(" ","")+"/"+str(index)+exercise_name.replace(" ","").replace("/","-")
    return my_str
    
def write_to_file(file_name, content):
    try:
        fout = open(file_name+".txt","a")
        fout.write(content+"\n")
        fout.close()
    except Exception as e:
        print("unknow symbol: ",e)

def insert_into_db_and_write_to_file(EXERCISE_NAME, BODY_PART, EQUIPMENT, ANIMATED_IMAGE_URL, TARGET_MUSCLE, SECONDARY_MUSCLES, INSTRUCTIONS):
    try:
        sql = f"INSERT INTO EXERCISE_INFO VALUES('{EXERCISE_NAME}', '{BODY_PART}', '{EQUIPMENT}', '{ANIMATED_IMAGE_URL}', '{TARGET_MUSCLE}', '{SECONDARY_MUSCLES}', '{INSTRUCTIONS}')"
        my_cursor.execute(sql)
        mydb.commit()
        write_to_file(BODY_PART+"_success", sql)
        print("success")
    except:
        write_to_file(BODY_PART+"_failed", sql)
        print("failed")



def main(data):
    
    for i in range(len(data)):
        curernt_data = data[i]
        EXERCISE_NAME = curernt_data["name"]
        BODY_PART = curernt_data["bodyPart"]
        EQUIPMENT = curernt_data["equipment"]
        ANIMATED_IMAGE_URL = generate_animated_image_url(i+1,BODY_PART,EXERCISE_NAME)
        TARGET_MUSCLE = curernt_data["target"]
        SECONDARY_MUSCLES = create_json_string(curernt_data["secondaryMuscles"])
        INSTRUCTIONS = create_json_string(curernt_data["instructions"])
        insert_into_db_and_write_to_file(EXERCISE_NAME, BODY_PART, EQUIPMENT, ANIMATED_IMAGE_URL, TARGET_MUSCLE, SECONDARY_MUSCLES, INSTRUCTIONS)



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