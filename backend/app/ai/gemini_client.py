import time

from google import genai
from google.genai import types

from app.core.config import settings


class GeminiClient:
    """
    Production-ready Gemini client for MediSense AI.
    """

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

        self.models = [
            settings.GEMINI_MODEL,
            "gemini-2.5-flash",
            "gemini-2.0-flash",
            "gemini-2.5-pro",
        ]

    def generate(self, prompt: str) -> str:

        print("\n" + "=" * 70)
        print("🤖 Gemini Client")
        print(f"Prompt Length : {len(prompt)} characters")
        print("=" * 70)

        last_error = None

        for model in self.models:

            print(f"\nTrying model : {model}")

            for attempt in range(3):

                try:

                    response = self.client.models.generate_content(
                        model=model,
                        contents=prompt,
                        config=types.GenerateContentConfig(
                            temperature=0.1,
                            top_p=0.9,
                            max_output_tokens=8192,
                            response_mime_type="application/json",
                        ),
                    )

                    if (
                        response is None
                        or response.text is None
                        or not response.text.strip()
                    ):
                        raise RuntimeError(
                            "Gemini returned an empty response."
                        )

                    print("✅ Gemini response received successfully.")
                    print("\n========== GEMINI RAW RESPONSE ==========")
                    print("Length:", len(response.text))
                    print(response.text[-500:])
                    print("=========================================\n")

                    return response.text.strip()

                except Exception as e:

                    last_error = e

                    print(
                        f"❌ Attempt {attempt + 1}/3 failed"
                    )

                    print(str(e))

                    retryable = any(
                        token in str(e)
                        for token in [
                            "503",
                            "UNAVAILABLE",
                            "RESOURCE_EXHAUSTED",
                            "429",
                        ]
                    )

                    if retryable and attempt < 2:

                        wait = (attempt + 1) * 3

                        print(
                            f"Retrying in {wait} seconds..."
                        )

                        time.sleep(wait)

                        continue

                    break

        raise RuntimeError(
            f"All Gemini models failed.\n\nLast Error:\n{last_error}"
        )