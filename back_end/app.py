from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
from read_file import read_file

app = Flask(__name__)
CORS(app)


@app.route('/process_input', methods=['POST'])
def process_input():
    instructions = request.form['instructions']
    file = request.files['files']

    _, file_extension = os.path.splitext(file.filename)
    file_extension = file_extension.lower()

    file_content = read_file(file, file_extension)
    
    

    response = jsonify({'some': 'data'})
    return response

if __name__ == '__main__':
    app.run(debug=True, port='8080')