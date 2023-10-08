import requests

# import os


from data import data

for i in range(len(data)):
    response = requests.get(data[i]["gifUrl"])

    if response.status_code == 200:
        body_part = data[i]["bodyPart"].replace(" ", "")
        exer_name = str(i + 1) + data[i]["name"].replace(" ", "").replace("/", "-")
        file_path = f"images/{body_part}/{exer_name}.gif"
        with open(file_path, "wb") as file:
            file.write(response.content)
        print("done" + exer_name)
    else:
        print(" ---  error --- > " + exer_name)

print(len(data))
