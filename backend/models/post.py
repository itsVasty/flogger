import uuid
from pydantic import BaseModel

from .user import User
from .comment import Comment

class BlogPost(BaseModel):
    id: str
    title: str
    description: str | None = None
    content: str
    digs: int = 0
    owner: User | None = None
    comments: list[Comment] | None = None