from flask import Flask, render_template
from routes.user_bp import *

app = Flask(__name__)

# blueprints
app.register_blueprint(user_bp, url_prefix='/users')

# app routes
@app.route('/')
@app.route('/home')
def home():
    return "Home"

if __name__ == '__main__':
    app.run()