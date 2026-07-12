import json

from app.ai.gemini_client import GeminiClient
from app.ai.json_parser import JSONParser


CLINICAL_PROMPT = """
You are an experienced physician specializing in laboratory report interpretation.

You are given an already extracted laboratory report in JSON format.

Your job is NOT to extract tests again.

Instead, clinically interpret the report.

Return ONLY valid JSON.

Never use markdown.

Never use ```json.

Never explain outside JSON.

Return EXACTLY this format:

{
  "health_score": 0,
  "health_status": "",
  "summary": "",
  "normal_findings": [],
  "abnormal_findings": [],
  "recommendations": [],
  "diet": [],
  "lifestyle": [],
  "follow_up": "",
  "disclaimer": "AI-generated medical interpretation. Please consult a qualified physician."
}

Instructions:

1. Calculate a health score between 0 and 100.

2. Health status must be one of:
   - Excellent
   - Good
   - Fair
   - Poor

3. Summary should be 2–4 sentences describing the overall report.

4. Every test whose status is "Normal" must appear in
   normal_findings.

5. Every test whose status is "Low" or "High" must appear in
   abnormal_findings.

6. Recommendations must be practical and based ONLY on abnormal
   findings.

7. Diet advice should be specific.

8. Lifestyle advice should be practical.

9. Follow-up should recommend future testing only when necessary.

10. Never invent laboratory values.

11. Never mention tests that are not present.

Laboratory Report JSON:

{{REPORT_JSON}}

Return ONLY JSON.
"""


class ClinicalAnalyzer:

    def __init__(self):
        self.client = GeminiClient()

    def analyze(self, report_json: dict):

        prompt = CLINICAL_PROMPT.replace(
            "{{REPORT_JSON}}",
            json.dumps(report_json, indent=2)
        )

        print("\n========== CLINICAL PROMPT ==========")
        print(prompt[:2000])
        print("=====================================\n")

        response = self.client.generate(prompt)

        return JSONParser.parse(response)