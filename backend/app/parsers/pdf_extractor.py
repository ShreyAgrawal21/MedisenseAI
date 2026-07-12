import fitz # pyright: ignore[reportMissingImports]
import re


class PDFExtractor:

    @staticmethod
    def looks_corrupted(text: str) -> bool:

        if not text:
            return True

        weird = len(re.findall(r"[-]", text))

        return weird > 20

    @classmethod
    def extract(cls, pdf_path: str):

        doc = fitz.open(pdf_path)

        text = ""

        for page in doc:
            text += page.get_text()

        doc.close()

        if cls.looks_corrupted(text):

            print("\n========== WARNING ==========")
            print("Embedded font detected.")
            print("OCR not enabled yet.")
            print("=============================\n")

        return text