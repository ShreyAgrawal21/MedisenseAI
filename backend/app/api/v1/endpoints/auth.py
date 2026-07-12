from fastapi import APIRouter, Depends # pyright: ignore[reportMissingImports]
from fastapi.security import OAuth2PasswordRequestForm # pyright: ignore[reportMissingImports]
from sqlalchemy.orm import Session # pyright: ignore[reportMissingImports]

from app.database.dependencies import get_db
from app.schemas.auth import LoginResponse      
from app.services.user_service import UserService

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/login",
    response_model=LoginResponse,
)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    service = UserService(db)

    user, access_token = service.login_user(
        form_data.username,
        form_data.password,
    )

    return LoginResponse(
        access_token=access_token,
        token_type="bearer",
        full_name=user.full_name,
        email=user.email
    )