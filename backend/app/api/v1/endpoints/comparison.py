from fastapi import APIRouter, Depends, HTTPException # pyright: ignore[reportMissingImports]
from sqlalchemy.orm import Session # pyright: ignore[reportMissingImports]

from app.core.dependencies import get_current_user
from app.database.dependencies import get_db
from app.models.user import User
from app.repositories.report_repository import ReportRepository
from app.schemas.comparison import (
    ComparisonRequest,
    ComparisonResponse,
)
from app.services.comparison_service import ComparisonService

router = APIRouter(
    prefix="/compare",
    tags=["AI Comparison"],
)


@router.post(
    "",
    response_model=ComparisonResponse,
)
def compare_reports(
    request: ComparisonRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """
    Compare two medical reports using AI.
    """

    repository = ReportRepository(db)
    service = ComparisonService(repository)

    try:
        comparison = service.compare(
            current_user=current_user,
            old_report_id=request.old_report_id,
            new_report_id=request.new_report_id,
        )

        return ComparisonResponse(
            comparison=comparison,
        )

    except ValueError as e:
        raise HTTPException(
            status_code=404,
            detail=str(e),
        )

    except PermissionError as e:
        raise HTTPException(
            status_code=403,
            detail=str(e),
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )