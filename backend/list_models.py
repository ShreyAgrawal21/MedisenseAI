import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("Gemini_API_Key")
)

for model in client.models.list():
    print(model.name)