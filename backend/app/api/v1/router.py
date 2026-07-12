from fastapi import APIRouter # pyright: ignore[reportMissingImports]

from app.api.v1.endpoints import (
    auth,
    health,
    users,
    reports,
    dashboard,
    chat,
    comparison,
    analysis,
    timeline,
)

api_router = APIRouter()

api_router.include_router(health.router)
api_router.include_router(users.router)
api_router.include_router(auth.router)
api_router.include_router(reports.router)
api_router.include_router(dashboard.router)
api_router.include_router(chat.router)
api_router.include_router(comparison.router)
api_router.include_router(
    analysis.router,
    prefix="/analysis",
    tags=["Analysis"],
)
api_router.include_router(
    timeline.router,
    prefix="/analysis/timeline",
    tags=["Timeline"],
)