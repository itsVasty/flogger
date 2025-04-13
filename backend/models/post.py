import uuid
from pydantic import BaseModel

from .user import User

class BlogPost(BaseModel):
    id: str
    title: str
    description: str | None = None
    content: str
    owner: User | None = None