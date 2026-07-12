from fastapi import ( # pyright: ignore[reportMissingImports]
    APIRouter,
    Depends,
    File,
    UploadFile,
    status,
    HTTPException,
)
from sqlalchemy import select # pyright: ignore[reportMissingImports]
from sqlalchemy.orm import Session # pyright: ignore[reportMissingImports]

from app.database.dependencies import get_db
from app.core.dependencies import get_current_user
from app.models.user import User
from app.models.report import Report
from app.schemas.report import ReportResponse, UploadReportResponse, ReportListResponse
from app.services.report_service import ReportService

router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


@router.post(
    "/upload",
    response_model=UploadReportResponse,
    status_code=status.HTTP_201_CREATED,
)
async def upload_report(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """
    Upload a medical report PDF,
    extract text,
    generate AI analysis,
    generate AI summary,
    and save everything to the database.
    """
    service = ReportService(db)

    return await service.upload_report(
        current_user=current_user,
        file=file,
    )


@router.get(
    "/{report_id}",
    response_model=ReportResponse,
    status_code=status.HTTP_200_OK,
)
def get_report(
    report_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """
    Get a single report belonging to the authenticated user.
    """

    service = ReportService(db)

    try:
        report = service.get_report(
            report_id=report_id,
            current_user=current_user,
        )

        return report

    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e),
        )

    except PermissionError as e:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=str(e),
        )

    except Exception as e:
        import traceback
        
        traceback.print_exc()
        
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e),
        )
        
@router.get(
    "",
    response_model=list[ReportListResponse],
    status_code=status.HTTP_200_OK,
)
def get_reports(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """
    Get all reports of the authenticated user.
    """

    service = ReportService(db)

    return service.get_reports(
        current_user=current_user,
    )
