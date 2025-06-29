from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from models import BlogPost, User, Comment

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

flogger_post = BlogPost(
    id='flogger',
    title="What is Flogger?",
    description="An open-source microblog",
    content="Flogger is an open source microblog built in python and react.",
    owner=flogger_admin,
    comments=[
        Comment(
            id='flogger',
            owner=flogger_admin,
            content='Flogger allows you to comment on posts :)'
        )
    ]
)

post_db = {
    "flogger": flogger_post,
    "todo-post-1": BlogPost(
        id='todo-post-1',
        title="Flogger Todo Post 1",
        description="An Example Flogger Post ",
        content="This is an example of what a Flogger Post would look like."
    ),
}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get('/')
async def greet():
    return {"message": "Hello, World"}

@app.get('/flogger')
async def flogger():
    return {"flogger" : post_db["flogger"]}

@app.get('/posts')
async def get_all_posts():
    print(post_db["flogger"])
    posts = post_db.copy()
    del posts["flogger"]
    return {"posts": posts}

@app.get('/posts/{post_id}')
async def get_post(post_id):
    return {post_id : post_db[post_id]}

@app.post('/posts/')
async def create_post(post : BlogPost):
    post_db[post.id] = post
    return post

@app.put("/posts/{post_id}", response_model=BlogPost)
async def update_post(post_id: str, post: BlogPost):
    post_encoded = jsonable_encoder(post)
    print(post_encoded)
    post_db[post_id] = post_encoded
    return post_encoded