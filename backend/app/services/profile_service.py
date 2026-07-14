from sqlalchemy.orm import Session

from app.core.security import (
    hash_password,
    verify_password,
)
from app.models.user import User
from app.repositories.profile_repository import (
    ProfileRepository,
)
from app.schemas.profile import (
    ChangePasswordRequest,
    ProfileResponse,
    ProfileUpdate,
    SettingsUpdate,
)


class ProfileService:

    def __init__(self, db: Session):

        self.repository = ProfileRepository(db)

    # ----------------------------------
    # Get Profile
    # ----------------------------------

    def get_profile(
        self,
        current_user: User,
    ) -> ProfileResponse:

        user = self.repository.get_profile(
            current_user.id
        )

        return ProfileResponse.model_validate(user)

    # ----------------------------------
    # Update Profile
    # ----------------------------------

    def update_profile(
        self,
        current_user: User,
        profile: ProfileUpdate,
    ) -> ProfileResponse:

        user = self.repository.get_profile(
            current_user.id
        )

        update_data = profile.model_dump(
            exclude_unset=True
        )

        updated_user = self.repository.update_profile(
            user,
            update_data,
        )

        return ProfileResponse.model_validate(
            updated_user
        )

    # ----------------------------------
    # Update Settings
    # ----------------------------------

    def update_settings(
        self,
        current_user: User,
        settings: SettingsUpdate,
    ) -> ProfileResponse:

        user = self.repository.get_profile(
            current_user.id
        )

        updated = self.repository.update_settings(
            user=user,
            dark_mode=settings.dark_mode,
            email_notifications=settings.email_notifications,
            ai_notifications=settings.ai_notifications,
        )

        return ProfileResponse.model_validate(
            updated
        )

    # ----------------------------------
    # Change Password
    # ----------------------------------

    def change_password(
        self,
        current_user: User,
        data: ChangePasswordRequest,
    ):

        user = self.repository.get_profile(
            current_user.id
        )

        if not verify_password(
            data.current_password,
            user.hashed_password,
        ):

            raise ValueError(
                "Current password is incorrect."
            )

        hashed = hash_password(
            data.new_password
        )

        self.repository.change_password(
            user,
            hashed,
        )

        return {
            "message":
            "Password changed successfully."
        }

    # ----------------------------------
    # Update Avatar
    # ----------------------------------

    def update_avatar(
        self,
        current_user: User,
        image_path: str,
    ) -> ProfileResponse:

        user = self.repository.get_profile(
            current_user.id
        )

        updated = self.repository.update_avatar(
            user,
            image_path,
        )

        return ProfileResponse.model_validate(
            updated
        )