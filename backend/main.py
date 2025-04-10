from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from models import Post

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def greet():
    return {"message": "Hello, World"}

@app.get('/post/{post_id}')
async def get_post(post_id):
    return {post_id : f"Post {post_id}"}

@app.post('/post/')
async def set_post(post : Post):
    return post

