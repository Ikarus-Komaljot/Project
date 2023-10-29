# #driver
# import pymongo

# mongoURI='mongodb+srv://komaljotkaur:N0h0LVcjpdsrc9Cs@cluster0.vpu3pxb.mongodb.net/'
# client=pymongo.MongoClient(mongoURI)

# db=client["USERS"]
# collection=db["users"]

# print(mongoURI)



# database/db.py

import pymongo
# from FastAPI.src.database.models.models import UserModel

mongoURI = 'mongodb+srv://komaljotkaur:N0h0LVcjpdsrc9Cs@cluster0.vpu3pxb.mongodb.net/'
# mongoURI=
client = pymongo.MongoClient(mongoURI)

db = client["USERS"]
collection = db["users"]

def create_user(user_data: dict):
    try:
        result = collection.insert_one(user_data)
        return result.inserted_id if result.acknowledged else None
    except Exception as e:
        raise Exception(f"Failed to create user: {str(e)}")



def all_images():
    try:
        response = collection.find({})
        data = []
        for i in response:
            for img in i['image_urls']:
                data.append(img)
        return data
    except Exception as e:
        raise Exception(f"Failed to retrieve images: {str(e)}")
