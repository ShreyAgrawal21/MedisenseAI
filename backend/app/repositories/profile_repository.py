from sqlalchemy.orm import Session

from app.models.user import User


class ProfileRepository:

    def __init__(self, db: Session):
        self.db = db

    # ----------------------------------
    # Get Profile
    # ----------------------------------

    def get_profile(
        self,
        user_id: int,
    ) -> User | None:

        return (
            self.db.query(User)
            .filter(User.id == user_id)
            .first()
        )

    # ----------------------------------
    # Update Profile
    # ----------------------------------

    def update_profile(
        self,
        user: User,
        data: dict,
    ) -> User:

        for field, value in data.items():

            setattr(
                user,
                field,
                value,
            )

        self.db.commit()

        self.db.refresh(user)

        return user

    # ----------------------------------
    # Update Settings
    # ----------------------------------

    def update_settings(
        self,
        user: User,
        dark_mode: bool,
        email_notifications: bool,
        ai_notifications: bool,
    ) -> User:

        user.dark_mode = dark_mode

        user.email_notifications = (
            email_notifications
        )

        user.ai_notifications = (
            ai_notifications
        )

        self.db.commit()

        self.db.refresh(user)

        return user

    # ----------------------------------
    # Change Password
    # ----------------------------------

    def change_password(
        self,
        user: User,
        hashed_password: str,
    ):

        user.hashed_password = hashed_password

        self.db.commit()

        self.db.refresh(user)

        return user

    # ----------------------------------
    # Update Avatar
    # ----------------------------------

    def update_avatar(
        self,
        user: User,
        image_path: str,
    ):

        user.profile_image = image_path

        self.db.commit()

        self.db.refresh(user)

        return user