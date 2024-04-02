
import google.generativeai as genai
from dotenv import load_dotenv
import os



def generate_latex(instructions, file_contnent):
    
    load_dotenv()  # Take environment variables from .env.
    api_key = os.getenv('GEMINI_API_KEY')
    genai.configure(api_key=api_key)
    
    model = genai.GenerativeModel('gemini-pro')
    if instructions:
        response = model.generate_content(f"""your goal is to convert the following body of text into latex. it should
                                      be ready to be imported into overleaf directly\n{file_contnent}\n\n Now,
                                      I'll pass you instructions related to how to do the conversion. These might
                                      be template to fit the body of text into or instructions on how to do the 
                                      conversion. interpert it to your best ability and integrate it.\n {instructions}""")
    else:
        response = model.generate_content(f"""your goal is to convert the following body of text into latex. it should
                                      be ready to be imported into overleaf directly\n{file_contnent}\n""")
    return response.candidates[0].content.parts[0].text
    