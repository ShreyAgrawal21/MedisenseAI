from datetime import datetime
from typing import Any

from pydantic import BaseModel


class DashboardReport(BaseModel):
    id: int
    original_filename: str
    uploaded_at: datetime
    status: str


class TrendPoint(BaseModel):
    date: str
    value: float


class HealthTrends(BaseModel):
    hemoglobin: list[TrendPoint] = []
    wbc: list[TrendPoint] = []
    rbc: list[TrendPoint] = []
    platelets: list[TrendPoint] = []
    health_score: list[TrendPoint] = []


class DashboardResponse(BaseModel):
    # Statistics
    total_reports: int
    abnormal_reports: int

    # Health
    health_score: int | None = None
    health_status: str | None = None

    # Latest Report
    latest_report: DashboardReport | None = None
    latest_analysis_id: int | None = None
    last_upload: datetime | None = None

    # Reports
    recent_reports: list[DashboardReport]

    # AI Summary
    latest_summary: dict[str, Any] | None = None

    # Health Trend Graph
    trends: HealthTrends