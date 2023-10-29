
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import controllers.controller
from routes import users
from routes import images

app = FastAPI()

# CORS settings
origins = ["http://localhost:3000","http://0.0.0.0:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.route)
app.include_router(images.route)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

# from fastapi import FastAPI, Form, File, UploadFile
# from typing import List
# from pydantic import BaseModel

# from fastapi.middleware.cors import CORSMiddleware
# import database.db as db

# import pymongo

# app = FastAPI()
# # another application is allowed to our fastapi application only if ot is running on localhost3000
# origins = [
#     # "http://localhost:3000",
#     "*",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )



# @app.get('/')
# async def demo():
#     return {"hello":"world"}

# @app.get('/all')
# async def get_all():
#     data=db.all()
#     return {"data":data}

# # from typing import list

# class UserForm(BaseModel):
#     firstname: str
#     lastname: str
#     email: str
#     image_urls: list[str] = []  # Optional field for image URLs

# @app.post("/create")
# async def create(
#    user_form:UserForm
# ):
#     print(user_form)
    
#     try:
#         # Create a document to insert into MongoDB- mvc,unit tests
#         user_data = {
#             "firstname": user_form.firstname,
#             "lastname": user_form.lastname,
#             "email":user_form.email,
#             "image_urls":user_form.image_urls,
       
#         }

#         # Insert the document into the MongoDB collection
#         result =db.collection.insert_one(user_data)

#         # Check if the insertion was successful
#         if result.acknowledged:
    
#             return {"message": "Data inserted successfully", "_id": str(result.inserted_id)}
#         else:
#             return {"message": "Failed to insert data into MongoDB"}
#     except Exception as e:
#         return {"message": f"An error occurred: {str(e)}"}#raise an ex with status code 500 as well!




# @app.get('/get_images')
# async def get_images():
   
#     images = db.all()  # Retrieve all images (you may need to modify your `db.all()` function)
#     return {"images": images}
  





# main.py - entery point
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from controller import UserController
# from models import UserModel

# app = FastAPI()

# # Allow cross-origin requests from any origin
# origins = ["*"]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Initialize the UserController
# user_controller = UserController()


# @app.get('/')
# async def demo():
#     return {"hello": "world"}

# @app.get('/all')
# async def get_all():
#     return user_controller.get_all()


# @app.post("/create")
# async def create(user_form: UserModel):
#     return user_controller.create_user(user_form)


# @app.get('/get_images')
# async def get_images():
#     return user_controller.get_images()


# main.py

# @app.get('/')
# async def get_all():
#     return controller.get_all_users()

# @app.post("/", status_code=201)
# async def create(user_form: controller.UserModel):
#     return controller.create_user(user_form)
