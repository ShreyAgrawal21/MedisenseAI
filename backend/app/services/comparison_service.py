import json

from app.ai.comparison_prompt import COMPARISON_PROMPT
from app.ai.gemini_client import GeminiClient
from app.models.user import User
from app.repositories.report_repository import ReportRepository


class ComparisonService:

    def __init__(self, repository: ReportRepository):
        self.repository = repository
        self.client = GeminiClient()

    def compare(
        self,
        current_user: User,
        old_report_id: int,
        new_report_id: int,
    ) -> str:
        """
        Compare two medical reports using Gemini AI.
        """

        old_report = self.repository.get_by_id(old_report_id)
        new_report = self.repository.get_by_id(new_report_id)

        if old_report is None:
            raise ValueError("Old report not found.")

        if new_report is None:
            raise ValueError("New report not found.")

        if old_report.user_id != current_user.id:
            raise PermissionError(
                "You are not authorized to access the old report."
            )

        if new_report.user_id != current_user.id:
            raise PermissionError(
                "You are not authorized to access the new report."
            )

        old_analysis = json.dumps(
            old_report.analysis_json or {},
            indent=2,
        )

        new_analysis = json.dumps(
            new_report.analysis_json or {},
            indent=2,
        )

        prompt = COMPARISON_PROMPT.format(
            old_report=old_analysis,
            new_report=new_analysis,
        )

        comparison = self.client.generate(prompt)
        comparison = comparison.replace("```json", "")
        comparison = comparison.replace("```", "")
        comparison = comparison.strip()

        return json.loads(comparison)

         