from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from models import BlogPost, User

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
flogger_admin = User(
    id='flogger-admin',
    name='Flogger Admin'
)

blog_post = BlogPost(
    id='flogger',
    title="What is Flogger?",
    description="An open-source microblog",
    content="Flogger is an open source microblog built in python and react.",
    owner=flogger_admin
)

post_db = {
    "flogger": BlogPost(
        id='flogger',
        title="What is Flogger?",
        description="An open-source microblog",
        content="Flogger is an open source microblog built in python and react.",
        owner=flogger_admin
    ),
    "todo-post-1": BlogPost(
        id='todo-post-1',
        title="Flogger Todo Post 1",
        description="An Example Flogger Post ",
        content="This is an example of what a Flogger Post would look like."
    ),
    "todo-post-2": BlogPost(
        id='todo-post-2',
        title="Flogger Todo Post 2",
        description="An Example Flogger Post ",
        content="This is an example of what a Flogger Post would look like."
    ),
    "todo-post-3": BlogPost(
        id='todo-post-3',
        title="Flogger Todo Post 3",
        description="An Example Flogger Post ",
        content="This is an example of what a Flogger Post would look like."
    ),
}


@app.get('/')
async def greet():
    return {"message": "Hello, World"}

@app.get('/flogger')
async def flogger():
    return {"flogger" : post_db["flogger"]}

@app.get('/posts')
async def get_all_posts():
    return {"posts": post_db}

@app.get('/posts/{post_id}')
async def get_post(post_id):
    return {post_id : post_db[post_id]}

@app.post('/posts/')
async def create_post(post : BlogPost):
    post_db.append(post)
    return post

@app.put("/posts/{post_id}", response_model=BlogPost)
async def update_post(post_id: str, post: BlogPost):
    post_encoded = jsonable_encoder(post)
    print(post_encoded)
    post_db[post_id] = post_encoded
    return post_encoded