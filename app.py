from flask import Flask, render_template
from routes.user_bp import *
from routes.blog_bp import *

# app init
app = Flask(__name__)

# blueprints
app.register_blueprint(user_bp, url_prefix='/user')
app.register_blueprint(blog_bp, url_prefix='/blog')

# app routes
@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run()