from pydantic import BaseModel, EmailStr # pyright: ignore[reportMissingImports]


class LoginResponse(BaseModel):
    access_token: str
    token_type: str

    full_name: str
    email: EmailStr