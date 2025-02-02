from flask import Flask, render_template, request, flash, redirect, url_for, send_from_directory
import os

app = Flask(__name__, static_folder='static')
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    if request.method == 'POST':
        try:
            name = request.form.get('name')
            email = request.form.get('email')
            subject = request.form.get('subject')
            message = request.form.get('message')
            flash('消息已成功发送！我们会尽快与您联系。', 'success')
        except:
            flash('发送失败，请稍后重试。', 'error')
        return redirect(url_for('contact'))

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run() 