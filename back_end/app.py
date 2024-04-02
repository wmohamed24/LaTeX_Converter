from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
import os
from read_file import read_file
from generate_latex import generate_latex

app = Flask(__name__)
CORS(app)

app.config['UPLOAD_FOLDER'] = './files'



@app.route('/download/<filename>')
def download_file(filename):
    # Make sure the filename is safe to avoid path traversal attacks
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)

# Set the folder where converted files are stored

@app.route('/process_input', methods=['POST'])
def process_input():
    instructions = request.form['instructions']
    file = request.files['files']

    _, file_extension = os.path.splitext(file.filename)
    file_extension = file_extension.lower()

    file_content = read_file(file, file_extension)
    latex = generate_latex(instructions, file_content)
    
    with open("./files/temp.tex", 'w') as latex_file:
        latex_file.write(latex)

    response = jsonify({'status': 'success'})
    return response

if __name__ == '__main__':
    app.run(debug=True, port='8080')