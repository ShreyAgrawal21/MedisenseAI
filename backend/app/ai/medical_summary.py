import json

from app.ai.gemini_client import GeminiClient
from app.ai.prompts_summary import SUMMARY_PROMPT


class MedicalSummaryGenerator:
    def __init__(self):
        self.client = GeminiClient()

    def generate(self, report_json: dict) -> dict:
        """
        Generates a human-readable medical summary
        from the structured report JSON.
        """

        prompt = SUMMARY_PROMPT.format(
            report=json.dumps(report_json, indent=2)
        )

        response = self.client.generate(prompt)

        response = response.strip()

        # Remove markdown if Gemini wraps JSON
        if response.startswith("```json"):
            response = response.replace("```json", "").replace("```", "").strip()

        elif response.startswith("```"):
            response = response.replace("```", "").strip()

        return json.loads(response)