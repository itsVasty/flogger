'''
Blog post DB model
'''
class Post:
    def __init__(self, post):
        self.id = post.id
        self.title = post.title
        self.content = post.content # hash
        self.user = post.user
