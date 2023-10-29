# models.py - simplifies input validation 


from pydantic import BaseModel
from typing import List

class UserModel(BaseModel):
    firstname: str
    lastname: str
    email: str
    image_urls: List[str] = []
    
