import json
import re


class JSONParser:
    """
    Cleans and parses JSON returned by Gemini/LLMs.
    """

    @staticmethod
    def parse(text: str):
        if not text:
            raise ValueError("Gemini returned an empty response.")

        text = text.strip()

        # Remove markdown fences
        text = re.sub(r"^```json\s*", "", text, flags=re.IGNORECASE)
        text = re.sub(r"^```\s*", "", text)
        text = re.sub(r"\s*```$", "", text)

        # Extract JSON object if Gemini added extra text
        start = text.find("{")
        end = text.rfind("}")

        if start != -1 and end != -1:
            text = text[start:end + 1]

        # Remove invalid control characters
        text = re.sub(r"[\x00-\x1F\x7F]", "", text)

        try:
            return json.loads(text)

        except json.JSONDecodeError as e:
            print("\n========== INVALID GEMINI JSON ==========")
            print(text)
            print("=========================================\n")
            raise ValueError(
                f"Gemini returned invalid JSON: {e}"
            )