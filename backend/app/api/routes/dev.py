from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.core.config import settings
from app.core.security import create_access_token
from app.models.user import User

router = APIRouter(prefix="/dev", tags=["dev"])


@router.post("/login")
def dev_login(
    telegram_id: int,
    db: Session = Depends(get_db),
):
    if settings.env != "dev":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Dev login is disabled outside dev environment",
        )

    user = db.query(User).filter(User.telegram_id == telegram_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    token = create_access_token(
        {
            "sub": str(user.id),
            "telegram_id": user.telegram_id,
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user,
    }