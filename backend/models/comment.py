from pydantic import BaseModel
from .user import User

class Comment(BaseModel):
    id: str
    owner: User
    content: str
    digs: int = 0