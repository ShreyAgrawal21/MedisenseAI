class GeminiClient:
    def __init__(self):
        self.client = genai.Client(api_key=settings.GEMINI_API_KEY) # pyright: ignore[reportUndefinedVariable]  # noqa: F821

        self.model = settings.GEMINI_MODEL # pyright: ignore[reportUndefinedVariable]  # noqa: F821

        if not self.model.startswith("models/"):
            self.model = f"models/{self.model}"

        print(f"Using Gemini model: {self.model}")