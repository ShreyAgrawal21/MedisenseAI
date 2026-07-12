from datetime import datetime

from pydantic import BaseModel


class TimelineItem(BaseModel):
    id: int

    report_name: str

    uploaded_at: datetime

    health_score: int

    summary: str