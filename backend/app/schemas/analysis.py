from pydantic import BaseModel

class AnalysisOverview(BaseModel):
    health_score: int
    reports: int
    critical: int
    warnings: int
    normal: int

    findings: list[str]
    recommendations: list[str]