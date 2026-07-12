import re


class MedicalParser:
    """
    Extract common medical parameters from report text.
    """

    PARAMETERS = {
        "hemoglobin": r"Hemoglobin\s*(?:g/dL)?\s*([0-9]+(?:\.[0-9]+)?)",
        "creatinine": r"Creatinine\s*(?:mg/dL)?\s*([0-9]+(?:\.[0-9]+)?)",
        "urea": r"Urea\s*(?:mg/dL)?\s*([0-9]+(?:\.[0-9]+)?)",
        "vitamin d": r"Vitamin\s*D\s*(?:ng/mL)?\s*([0-9]+(?:\.[0-9]+)?)",
        "vitamin b12": r"Vitamin\s*B12\s*(?:pg/mL)?\s*([0-9]+(?:\.[0-9]+)?)",
        "platelets": r"Platelets?\s*(?:lakhs?/µL|/cmm)?\s*([0-9]+(?:\.[0-9]+)?)",
        "wbc": r"WBC(?:\s*Count)?\s*([0-9]+(?:\.[0-9]+)?)",
        "rbc": r"RBC(?:\s*Count)?\s*([0-9]+(?:\.[0-9]+)?)",
    }

    @classmethod
    def parse(cls, text: str) -> dict:
        results = {}

        for parameter, pattern in cls.PARAMETERS.items():
            match = re.search(pattern, text, re.IGNORECASE)

            if match:
                try:
                    value = float(match.group(1))
                except ValueError:
                    value = match.group(1)

                results[parameter] = value

        return results