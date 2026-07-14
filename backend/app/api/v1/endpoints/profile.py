from fastapi import APIRouter, Depends, HTTPException # pyright: ignore[reportMissingImports]
from sqlalchemy.orm import Session # pyright: ignore[reportMissingImports]

from app.database.dependencies import get_db
from app.core.dependencies import get_current_user # pyright: ignore[reportMissingImports]
from app.models.user import User
from app.schemas.profile import (
    ChangePasswordRequest,
    ProfileResponse,
    ProfileUpdate,
    SettingsUpdate,
)
from app.services.profile_service import ProfileService

router = APIRouter(
    prefix="/profile",
    tags=["Profile"],
)


# -----------------------------------------
# Get Profile
# -----------------------------------------

@router.get(
    "",
    response_model=ProfileResponse,
)
def get_profile(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):

    service = ProfileService(db)

    return service.get_profile(current_user)


# -----------------------------------------
# Update Profile
# -----------------------------------------

@router.put(
    "",
    response_model=ProfileResponse,
)
def update_profile(
    profile: ProfileUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):

    service = ProfileService(db)

    return service.update_profile(
        current_user,
        profile,
    )


# -----------------------------------------
# Update Settings
# -----------------------------------------

@router.patch(
    "/settings",
    response_model=ProfileResponse,
)
def update_settings(
    settings: SettingsUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):

    service = ProfileService(db)

    return service.update_settings(
        current_user,
        settings,
    )


# -----------------------------------------
# Change Password
# -----------------------------------------

@router.patch(
    "/password",
)
def change_password(
    data: ChangePasswordRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):

    service = ProfileService(db)

    try:

        return service.change_password(
            current_user,
            data,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )