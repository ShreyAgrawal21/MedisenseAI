from app.ai.gemini_client import GeminiClient
from app.ai.json_parser import JSONParser
from app.ai.prompts import REPORT_EXTRACTION_PROMPT
from app.ai.clinical_analyzer import ClinicalAnalyzer

from app.schemas.ai_report import MedicalReport


class ReportAnalyzer:

    def __init__(self):
        self.client = GeminiClient()
        self.clinical_analyzer = ClinicalAnalyzer()

    def analyze(self, text: str):

        # -------------------------------
        # Step 1: Extract report
        # -------------------------------

        prompt = REPORT_EXTRACTION_PROMPT.replace(
            "{{REPORT_TEXT}}",
            text
        )

        print("\n========== EXTRACTION PROMPT ==========")
        print(prompt[:2000])
        print("=======================================\n")

        response = self.client.generate(prompt)

        parsed = JSONParser.parse(response)

        medical_report = MedicalReport.model_validate(parsed)

        report_json = medical_report.model_dump()

        print("\n========== EXTRACTION COMPLETE ==========")
        print(report_json)
        print("=========================================\n")

        # -------------------------------
        # Step 2: Clinical AI
        # -------------------------------

        clinical_json = self.clinical_analyzer.analyze(report_json)

        print("\n========== CLINICAL ANALYSIS ==========")
        print(clinical_json)
        print("=======================================\n")

        # -------------------------------
        # Step 3: Merge both JSONs
        # -------------------------------

        merged_report = {
            **report_json,
            **clinical_json
        }

        print("\n========== FINAL MERGED JSON ==========")
        print(merged_report)
        print("=======================================\n")

        return merged_report