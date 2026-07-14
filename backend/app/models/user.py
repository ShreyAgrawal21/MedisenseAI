from datetime import date

from sqlalchemy import (
    Boolean,
    Date,
    Float,
    String,
)
from sqlalchemy.orm import (
    Mapped,
    mapped_column,
)

from app.database.base import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )

    full_name: Mapped[str] = mapped_column(
        String(100)
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        index=True,
    )

    hashed_password: Mapped[str] = mapped_column(
        String(255)
    )

    # -------------------------
    # Personal Information
    # -------------------------

    phone_number: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )

    gender: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )

    date_of_birth: Mapped[date | None] = mapped_column(
        Date,
        nullable=True,
    )

    # -------------------------
    # Health Information
    # -------------------------

    blood_group: Mapped[str | None] = mapped_column(
        String(10),
        nullable=True,
    )

    height: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    weight: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    allergies: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    medical_conditions: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    # -------------------------
    # Emergency Contact
    # -------------------------

    emergency_contact_name: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    emergency_contact_phone: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )

    emergency_contact_relation: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True,
    )

    # -------------------------
    # Profile
    # -------------------------

    profile_image: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    # -------------------------
    # Settings
    # -------------------------

    dark_mode: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
    )

    email_notifications: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )

    ai_notifications: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )