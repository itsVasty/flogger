'''
responsible for interfacing with contoller and view for specific part of app
'''
from flask import render_template, Blueprint

from controllers.user_controller import *

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/')
def foo():
    return render_template('user.html')

@user_bp.route('/<user_id>')
def bar(user_id):
    return f"Users {user_id}"