import json

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_current_user
from app.database.dependencies import get_db

from app.models.user import User

from app.repositories.report_repository import ReportRepository

from app.schemas.timeline import TimelineItem

router = APIRouter()


@router.get(
    "",
    response_model=list[TimelineItem],
)
def get_timeline(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):

    repository = ReportRepository(db)

    reports = repository.get_user_reports(
        current_user.id
    )

    timeline: list[TimelineItem] = []

    for report in reports:

        score = 80

        if report.analysis_json:
    
            analysis = report.analysis_json

            if isinstance(analysis, str):
                try:
                    analysis = json.loads(analysis)
                except Exception:
                    analysis = {}

            if isinstance(analysis, dict):
                score = analysis.get("health_score", 80)

        summary = "Medical report uploaded."

        if report.summary_json:
            
            summary_data = report.summary_json

            if isinstance(summary_data, str):
                try:
                    summary_data = json.loads(summary_data)
                except Exception:
                    summary_data = summary_data

                summary = (
                    summary_data.get("summary")
                    or summary_data.get(
                        "overall_summary"
                    )
                    or summary
                )

            else:

                summary = str(summary_data)

        timeline.append(

            TimelineItem(
                id=report.id,
                report_name=report.original_filename,
                uploaded_at=report.uploaded_at,
                health_score=score,
                summary=summary,
            )

        )

    return timeline