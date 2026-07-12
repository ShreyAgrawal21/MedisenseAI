import json

from app.ai.medical_summary import MedicalSummaryGenerator

# Load the structured JSON from a file
with open("sample_report.json", "r", encoding="utf-8") as f:
    report = json.load(f)

generator = MedicalSummaryGenerator()

summary = generator.generate(report)

print("\n================ AI SUMMARY ================\n")

print(json.dumps(summary, indent=4))

print("\n============================================\n")