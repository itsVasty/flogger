'''
responsible for interfacing with contoller and view for specific part of app
'''
from flask import Blueprint

from controllers.user_controller import *

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/')
def foo():
    return "Users"