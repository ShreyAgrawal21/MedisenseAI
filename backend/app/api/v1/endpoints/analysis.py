from fastapi import APIRouter

from app.schemas.analysis import AnalysisOverview

router = APIRouter()


@router.get(
    "/overview",
    response_model=AnalysisOverview,
)
def overview():

    return AnalysisOverview(
        health_score=91,
        reports=12,
        critical=1,
        warnings=3,
        normal=18,
        findings=[
            "Vitamin D deficiency detected.",
            "Blood sugar remains stable.",
            "Kidney function is normal.",
        ],
        recommendations=[
            "Increase Vitamin D intake.",
            "Exercise 30 minutes daily.",
            "Drink more water.",
        ],
    )