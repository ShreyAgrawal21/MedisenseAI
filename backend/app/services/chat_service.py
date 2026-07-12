import json

from app.ai.chat_prompt import CHAT_PROMPT
from app.ai.gemini_client import GeminiClient
from app.models.user import User
from app.repositories.report_repository import ReportRepository


class ChatService:

    def __init__(self, repository: ReportRepository):
        self.repository = repository
        self.client = GeminiClient()

    def ask(
        self,
        current_user: User,
        report_id: int,
        question: str,
    ) -> str:
        """
        Ask Gemini questions about a medical report.
        """

        report = self.repository.get_by_id(report_id)

        if report is None:
            raise ValueError("Report not found.")

        if report.user_id != current_user.id:
            raise PermissionError(
                "You are not authorized to access this report."
            )

        report_text = report.extracted_text or ""

        analysis = json.dumps(
            report.analysis_json or {},
            indent=2,
        )

        summary = json.dumps(
            report.summary_json or {},
            indent=2,
        )

        prompt = CHAT_PROMPT.format(
            report_text=report_text[:12000],
            analysis=analysis,
            summary=summary,
            question=question,
        )

        answer = self.client.generate(prompt)

        return answer