from pydantic import BaseModel # pyright: ignore[reportMissingImports]


class ComparisonRequest(BaseModel):
    old_report_id: int
    new_report_id: int


class ComparisonResult(BaseModel):
    summary: str
    improved: list[str]
    worsened: list[str]
    stable: list[str]
    recommendation: str


class ComparisonResponse(BaseModel):
    comparison: ComparisonResult