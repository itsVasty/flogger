'''
User DB model
'''
class User:
    def __init__(self, user):
        self.id = user.id
        self.email = user.email
        self.password = user.password # hash
        self.name = user.name
        self.surname = user.surname
        self.bio = user.bio
