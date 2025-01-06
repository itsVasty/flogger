'''
responsible for interfacing with contoller and view for specific part of app
'''
from flask import render_template, Blueprint

from controllers.blog_controller import *

blog_bp = Blueprint('blog_bp', __name__)

@blog_bp.route('/')
def foo():
    return render_template('post.html')

@blog_bp.route('/<blog_id>')
def bar(blog_id):
    return f"Blog {blog_id}"