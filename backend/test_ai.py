from app.utils.pdf_reader import PDFReader
from app.ai.report_analyzer import ReportAnalyzer

text = PDFReader.extract_text(
    "uploads/618362c2-adc5-4679-b25b-be9a665cad28.pdf"
)

analyzer = ReportAnalyzer()

result = analyzer.analyze(text[:3000])

print(result.model_dump_json(indent=4))