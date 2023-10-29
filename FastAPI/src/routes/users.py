
from fastapi import APIRouter
import controllers.controller

route = APIRouter(prefix="/users",tags=["Users"])

# @router.get('/')
# async def all_users():
#     return controller.all_users()

@route.post("/", status_code=201)
async def create_user(user_form: controllers.controller.UserModel):
    return controllers.controller.create_user(user_form)