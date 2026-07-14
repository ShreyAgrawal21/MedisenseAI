from datetime import date
from typing import Optional

from pydantic import BaseModel, ConfigDict, EmailStr


# -------------------------------------
# Base Profile
# -------------------------------------

class ProfileBase(BaseModel):

    full_name: str

    phone_number: Optional[str] = None

    gender: Optional[str] = None

    date_of_birth: Optional[date] = None

    blood_group: Optional[str] = None

    height: Optional[float] = None

    weight: Optional[float] = None

    allergies: Optional[str] = None

    medical_conditions: Optional[str] = None

    emergency_contact_name: Optional[str] = None

    emergency_contact_phone: Optional[str] = None

    emergency_contact_relation: Optional[str] = None


# -------------------------------------
# Profile Response
# -------------------------------------

class ProfileResponse(ProfileBase):

    id: int

    email: EmailStr

    profile_image: Optional[str] = None

    dark_mode: bool

    email_notifications: bool

    ai_notifications: bool

    model_config = ConfigDict(
        from_attributes=True
    )


# -------------------------------------
# Update Profile
# -------------------------------------

class ProfileUpdate(ProfileBase):
    pass


# -------------------------------------
# Change Password
# -------------------------------------

class ChangePasswordRequest(BaseModel):

    current_password: str

    new_password: str


# -------------------------------------
# Settings
# -------------------------------------

class SettingsUpdate(BaseModel):

    dark_mode: bool

    email_notifications: bool

    ai_notifications: bool