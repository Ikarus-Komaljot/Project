
from fastapi import APIRouter, HTTPException
import controllers.controller

route = APIRouter(prefix="/images",tags=["Images"])



@route.get("/", status_code=200)
async def all_images():
    return controllers.controller.all_images()