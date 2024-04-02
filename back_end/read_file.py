from PyPDF2 import PdfReader
import io
from docx import Document

class MyCustomError(Exception):
    def __init__(self):
        super().__init__("File type isn't suppored")


def handle_pdf(file):
    file_content = ""
    file_stream = io.BytesIO(file.read())  # Create a stream object from the uploaded file
    reader = PdfReader(file_stream)
    for page in reader.pages:
        file_content += page.extract_text()
    return file_content

def handle_docx(file):
    document = Document(io.BytesIO(file.read()))  # Create a Document object from the file's content

    doc_text = []
    for paragraph in document.paragraphs:
        doc_text.append(paragraph.text)
    file_content = '\n'.join(doc_text)
    return file_content

def handle_txt(file):
    return file.read().decode('utf-8')

def read_file(file, extension):
    if extension == ".pdf":
        return handle_pdf(file)
    elif extension == ".docx":
        return handle_docx(file)
    elif extension == ".txt":
        return handle_txt(file)
    else:
        raise MyCustomError()


