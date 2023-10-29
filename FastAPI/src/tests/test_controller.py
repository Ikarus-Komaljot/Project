from unittest.mock import patch
import pytest
from fastapi import HTTPException
from controllers.controller import create_user
from database.models.models import UserModel
from controllers.controller import all_images


# from  controllers.controller import create_user 
# from controllers.controller import create_user



'''
This code tests create_user 
Case 1 : Normal Operation
Case 2 : Exception
'''

# Case 1 
@patch('controllers.controller.db.create_user')
def test_create_user_Successful(mock_user):
    # given
    user_data = UserModel(
         firstname= 'test-user',
        lastname= 'last-name',
        email= 'test@gmail.com',
        image_urls = ['test.png']
    )

    # when
    mock_user.return_value = 'testID'
    result = create_user(user_data)

    # then
    assert result == {"message": "User created successfully", "user": 'testID'}
    

# Case 2 
@patch('controllers.controller.db.create_user')
def test_create_user_Exception(mock_user):
    # given
    user_data = UserModel(
         firstname= 'test-user',
        lastname= 'last-name',
        email= 'test@gmail.com',
        image_urls = ['test.png']
    )
    mock_user.side_effect = HTTPException(status_code=500,detail='Error')

    with pytest.raises(HTTPException) as exc_info:
        create_user(user_data)
    
    exc_info.value.status_code == 500


# Case 1: Normal Operation
@patch('database.db.Database.all_images', return_value=["image1.jpg", "image2.png"])
def test_all_images_normal(mock_db):
    result = all_images()
    assert result == {"images": ["image1.jpg", "image2.png"]}

# Case 2: Exception Scenario
@patch('database.db.Database.all_images', side_effect=Exception("Database Error"))
def test_all_images_exception(mock_db):
    with pytest.raises(HTTPException) as exc_info:
        all_images()
    
    assert exc_info.value.status_code == 500

    



