# controllers.py

from fastapi import HTTPException
from pydantic import BaseModel
from typing import List
from database.models.models import UserModel
import database.db as db

def create_user(user_form: UserModel):
    try:
        user_data = {
            "firstname": user_form.firstname,
            "lastname": user_form.lastname,
            "email": user_form.email,
            "image_urls": user_form.image_urls,
        }

        result = db.create_user(user_data)

        if result:
            return {"message": "User created successfully", "user": str(result)}
        else:
            raise HTTPException(status_code=500, detail="Failed to create user")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


def all_images():
    try:
        images = db.all_images()
        return {"images": images}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

# def all_users():
#     try:
#         data = db.all_users()
#         return {"data": data}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")