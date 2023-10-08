file ALLDATA.py contains lists of all the exercices
the directory of "images" contain many subdirectory with name as the musclegroup/body_part name like : chest, cardio, back etc
in each subdirectory we have the images with prefix as id of natural number concatonated with the name of the exercises


image path : 
images/{body_part}/{exer_name}.gif

exer_name:
int_id + excercise_real_name(with some changes as mentioned below)

changes in body_part :
In body_part , we have replaced space with no space : " " is replaced by ""

changes in exer_name:
we have replaced " " with "" and "/" with "-"


EG:
images/back/23barbelldeclinewide-grippullover.gif