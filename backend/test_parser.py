from app.utils.pdf_reader import PDFReader
from app.parsers.medical_parser import MedicalParser

text = PDFReader.extract_text(
    "uploads/618362c2-adc5-4679-b25b-be9a665cad28.pdf"
)

results = MedicalParser.parse(text)

print(results)