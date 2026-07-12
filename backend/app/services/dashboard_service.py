import json

from app.models.user import User
from app.repositories.report_repository import ReportRepository
from app.schemas.dashboard import (
    DashboardReport,
    DashboardResponse,
    HealthTrends,
    TrendPoint,
)


class DashboardService:

    def __init__(self, repository: ReportRepository):
        self.repository = repository

    def get_dashboard(
        self,
        current_user: User,
    ) -> DashboardResponse:

        # ---------------------------------------------------
        # Reports
        # ---------------------------------------------------

        total_reports = self.repository.get_total_reports(
            current_user.id
        )

        latest_report = self.repository.get_latest_report(
            current_user.id
        )

        recent_reports = self.repository.get_recent_reports(
            current_user.id
        )

        trends = self.repository.build_health_trends(
            current_user.id
        )

        latest_analysis_id = self.repository.get_latest_analysis_id(
            current_user.id
        )

        # ---------------------------------------------------
        # Latest Summary
        # ---------------------------------------------------

        latest_summary = None

        if latest_report:

            latest_summary = latest_report.summary_json

            if isinstance(latest_summary, str):

                try:
                    latest_summary = json.loads(
                        latest_summary
                    )

                except Exception:
                    latest_summary = None

        # ---------------------------------------------------
        # Health Score
        # ---------------------------------------------------

        health_score = None
        health_status = "Unknown"

        if latest_summary:

            health_score = latest_summary.get(
                "health_score"
            )

            health_status = latest_summary.get(
                "health_status",
                "Unknown",
            )

        # ---------------------------------------------------
        # Abnormal Reports
        # ---------------------------------------------------

        abnormal_reports = 0

        for report in recent_reports:

            analysis = report.analysis_json or {}

            if isinstance(analysis, str):

                try:

                    analysis = json.loads(
                        analysis
                    )

                except Exception:

                    analysis = {}

            tests = analysis.get(
                "tests",
                [],
            )

            for test in tests:

                if not isinstance(test, dict):
                    continue

                if test.get(
                    "status"
                ) in (
                    "High",
                    "Low",
                    "Critical",
                ):

                    abnormal_reports += 1
                    break

        # ---------------------------------------------------
        # Latest Report
        # ---------------------------------------------------

        latest_dashboard_report = None

        if latest_report:

            latest_dashboard_report = DashboardReport(
                id=latest_report.id,
                original_filename=latest_report.original_filename,
                uploaded_at=latest_report.uploaded_at,
                status=latest_report.status,
            )

        # ---------------------------------------------------
        # Recent Reports
        # ---------------------------------------------------

        dashboard_reports = []

        for report in recent_reports:

            dashboard_reports.append(
                DashboardReport(
                    id=report.id,
                    original_filename=report.original_filename,
                    uploaded_at=report.uploaded_at,
                    status=report.status,
                )
            )

        # ---------------------------------------------------
        # Trend Conversion
        # ---------------------------------------------------

        trend_model = HealthTrends(
            hemoglobin=[
                TrendPoint(**x)
                for x in trends["hemoglobin"]
            ],

            wbc=[
                TrendPoint(**x)
                for x in trends["wbc"]
            ],

            rbc=[
                TrendPoint(**x)
                for x in trends["rbc"]
            ],

            platelets=[
                TrendPoint(**x)
                for x in trends["platelets"]
            ],

            health_score=[
                TrendPoint(**x)
                for x in trends["health_score"]
            ],
        )

        # ---------------------------------------------------
        # Response
        # ---------------------------------------------------

        return DashboardResponse(

            total_reports=total_reports,

            abnormal_reports=abnormal_reports,

            health_score=health_score,

            health_status=health_status,

            latest_report=latest_dashboard_report,

            latest_analysis_id=latest_analysis_id,

            last_upload=(
                latest_report.uploaded_at
                if latest_report
                else None
            ),

            recent_reports=dashboard_reports,

            latest_summary=latest_summary,

            trends=trend_model,
        )