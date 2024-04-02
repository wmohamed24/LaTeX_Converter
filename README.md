# LaTeX Converter

This project is a web application designed to convert PDF, Docx, and txt documents into LaTeX files, making it easier for users to extract and edit the content of these documents in a format suitable for academic and scientific documentation.

## Features

- File upload interface supporting PDF, DOCX, and TXT formats.
- Real-time conversion to LaTeX.
- Downloadable converted LaTeX file.
- User-friendly interface with instant feedback on upload and conversion status.

## Technologies Used

- React.js for the frontend.
- Ant Design for UI components.
- Python with Flask for the backend.
- Gemini API for the conversion.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.
- Python installed on your system.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/pdf-to-latex-converter.git
    ```
2. Navigate to the project directory:
    ```bash
    cd pdf-to-latex-converter
    ```
3. Install the necessary Node.js dependencies:
    ```bash
    npm install
    ```
4. Start the frontend development server:
    ```bash
    npm run dev
    ```

### Backend Setup

To set up the Flask backend:

1. Navigate to the backend directory:
    ```bash
    cd LATEX_CONVERTER/back_end
    ```
2. Set up a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
3. Install the required Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Start the Flask development server:
    ```bash
    python app.py
    ```

## Usage

After starting both the frontend and backend servers, go to `http://localhost:3000` in your web browser to access the application.

1. Use the file upload interface to select a PDF, DOCX, or TXT file.
2. Click 'Convert' to start the conversion process.
3. Once the conversion is complete, a download link for the LaTeX file will be provided.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Wael Mohamed - wmohamed@colgate.edu

Project Link: [https://github.com/yourusername/pdf-to-latex-converter](https://github.com/yourusername/pdf-to-latex-converter)

