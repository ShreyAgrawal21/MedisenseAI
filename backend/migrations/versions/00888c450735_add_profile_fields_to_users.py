"""add_profile_fields_to_users

Revision ID: 00888c450735
Revises: 49e4ef651036
Create Date: 2026-07-12 23:34:49.724529

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers
revision = "00888c450735"
down_revision = "49e4ef651036"
branch_labels = None
depends_on = None


def upgrade():

    op.add_column(
        "users",
        sa.Column(
            "phone_number",
            sa.String(20),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "gender",
            sa.String(20),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "date_of_birth",
            sa.Date(),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "blood_group",
            sa.String(10),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "height",
            sa.Float(),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "weight",
            sa.Float(),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "allergies",
            sa.String(500),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "medical_conditions",
            sa.String(500),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "emergency_contact_name",
            sa.String(100),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "emergency_contact_phone",
            sa.String(20),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "emergency_contact_relation",
            sa.String(50),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "profile_image",
            sa.String(500),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "dark_mode",
            sa.Boolean(),
            server_default=sa.false(),
            nullable=False,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "email_notifications",
            sa.Boolean(),
            server_default=sa.true(),
            nullable=False,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "ai_notifications",
            sa.Boolean(),
            server_default=sa.true(),
            nullable=False,
        ),
    )


def downgrade():

    op.drop_column("users", "ai_notifications")
    op.drop_column("users", "email_notifications")
    op.drop_column("users", "dark_mode")
    op.drop_column("users", "profile_image")
    op.drop_column("users", "emergency_contact_relation")
    op.drop_column("users", "emergency_contact_phone")
    op.drop_column("users", "emergency_contact_name")
    op.drop_column("users", "medical_conditions")
    op.drop_column("users", "allergies")
    op.drop_column("users", "weight")
    op.drop_column("users", "height")
    op.drop_column("users", "blood_group")
    op.drop_column("users", "date_of_birth")
    op.drop_column("users", "gender")
    op.drop_column("users", "phone_number")