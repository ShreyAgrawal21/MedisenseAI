from datetime import datetime
from typing import Any

from pydantic import BaseModel, ConfigDict # pyright: ignore[reportMissingImports]


class ReportResponse(BaseModel):
    id: int

    original_filename: str
    stored_filename: str
    file_type: str
    file_size: int

    status: str
    uploaded_at: datetime

    extracted_text: str | None = None

    analysis_json: dict[str, Any] | None = None
    summary_json: dict[str, Any] | None = None

    model_config = ConfigDict(from_attributes=True)
    
class ReportListResponse(BaseModel):
    id: int

    original_filename: str
    stored_filename: str

    file_type: str
    file_size: int

    status: str
    uploaded_at: datetime

    analysis_json: dict[str, Any] | None = None
    summary_json: dict[str, Any] | None = None

    model_config = ConfigDict(from_attributes=True)


class UploadReportResponse(BaseModel):

    id: int

    message: str

    status: str

    analysis: dict[str, Any]

    summary: dict[str, Any]

    parsed_values: dict[str, Any]