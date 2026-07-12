from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.user import User
from app.models.report import Report


class DashboardRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_user(self, user_id: int):
        return (
            self.db.query(User)
            .filter(User.id == user_id)
            .first()
        )

    def total_reports(self, user_id: int):
        return (
            self.db.query(func.count(Report.id))
            .filter(Report.user_id == user_id)
            .scalar()
            or 0
        )

    def recent_reports(self, user_id: int, limit: int = 5):
        return (
            self.db.query(Report)
            .filter(Report.user_id == user_id)
            .order_by(Report.created_at.desc())
            .limit(limit)
            .all()
        )