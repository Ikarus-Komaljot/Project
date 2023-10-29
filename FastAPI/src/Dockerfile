# Use an official Python runtime as a parent image
FROM python:3.10.5-alpine

# Set the working directory in the container
WORKDIR /app

# Copy requirements.txt to the container
COPY requirements.txt .

# Install FastAPI and Uvicorn dependencies
RUN pip install -r requirements.txt

# Copy all project files to the container
COPY . .

# # Expose the port that your FastAPI app will run on
# EXPOSE 8000

# # Define the command to start your application
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
