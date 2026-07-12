import json
from datetime import datetime
from sqlalchemy import desc, func # pyright: ignore[reportMissingImports]
from sqlalchemy.orm import Session # pyright: ignore[reportMissingImports]

from app.models.report import Report


class ReportRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(self, report: Report) -> Report:
        """
        Save a new report to the database.
        """
        self.db.add(report)
        self.db.commit()
        self.db.refresh(report)
        return report

    def get_by_id(self, report_id: int) -> Report | None:
        """
        Get report by ID.
        """
        return (
            self.db.query(Report)
            .filter(Report.id == report_id)
            .first()
        )

    def get_user_reports(self, user_id: int) -> list[Report]:
        """
        Get all reports belonging to a user.
        """
        return (
            self.db.query(Report)
            .filter(Report.user_id == user_id)
            .order_by(desc(Report.uploaded_at))
            .all()
        )

    def get_total_reports(self, user_id: int) -> int:
        """
        Get total number of reports for a user.
        """
        return (
            self.db.query(func.count(Report.id))
            .filter(Report.user_id == user_id)
            .scalar()
            or 0
        )

    def get_latest_report(self, user_id: int) -> Report | None:
        """
        Get the latest uploaded report.
        """
        return (
            self.db.query(Report)
            .filter(Report.user_id == user_id)
            .order_by(desc(Report.uploaded_at))
            .first()
        )

    def get_recent_reports(
        self,
        user_id: int,
        limit: int = 5,
    ) -> list[Report]:
        """
        Get the most recent reports.
        """
        return (
            self.db.query(Report)
            .filter(Report.user_id == user_id)
            .order_by(desc(Report.uploaded_at))
            .limit(limit)
            .all()
        )
    
    # -------------------------------------------------------
    # Dashboard V2
    # -------------------------------------------------------

    def get_all_reports(
        self,
        user_id: int,
    ) -> list[Report]:
        """
        Returns all reports ordered by upload date.
        Used for health trend graphs.
        """

        return (
            self.db.query(Report)
            .filter(Report.user_id == user_id)
            .order_by(Report.uploaded_at.asc())
            .all()
        )

    def get_latest_analysis_id(
        self,
        user_id: int,
    ) -> int | None:

        report = self.get_latest_report(user_id)

        if report:
            return report.id

        return None

    def build_health_trends(
        self,
        user_id: int,
    ) -> dict:

        reports = self.get_all_reports(user_id)

        trends = {
            "hemoglobin": [],
            "wbc": [],
            "rbc": [],
            "platelets": [],
            "health_score": [],
        }

        for report in reports:

            analysis = report.analysis_json

            if isinstance(analysis, str):
                try:
                    analysis = json.loads(analysis)
                except Exception:
                    continue

            if not isinstance(analysis, dict):
                continue

            tests = analysis.get("tests", [])

            report_date = report.uploaded_at.strftime("%d %b")

            for test in tests:

                if not isinstance(test, dict):
                    continue

                name = str(
                    test.get("name", "")
                ).lower()

                value = test.get("value")

                if value is None:
                    continue

                try:
                    value = float(value)
                except Exception:
                    continue

                if "hemoglobin" in name:

                    trends["hemoglobin"].append(
                        {
                            "date": report_date,
                            "value": value,
                        }
                    )

                elif "wbc" in name:

                    trends["wbc"].append(
                        {
                            "date": report_date,
                            "value": value,
                        }
                    )

                elif "rbc" in name:

                    trends["rbc"].append(
                        {
                            "date": report_date,
                            "value": value,
                        }
                    )

                elif "platelet" in name:

                    trends["platelets"].append(
                        {
                            "date": report_date,
                            "value": value,
                        }
                    )

            health_score = analysis.get("health_score")

            if health_score is not None:

                try:

                    trends["health_score"].append(
                        {
                            "date": report_date,
                            "value": float(health_score),
                        }
                    )

                except Exception:
                    pass

        return trends