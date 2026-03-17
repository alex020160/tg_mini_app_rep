from sqlalchemy.orm import Session

from app.core.security import create_access_token, verify_telegram_init_data
from app.models.user import User


def authenticate_telegram_user(init_data: str, db: Session):
    tg_user = verify_telegram_init_data(init_data)

    telegram_id = tg_user["id"]

    user = db.query(User).filter(User.telegram_id == telegram_id).first()

    if not user:
        user = User(
            telegram_id=telegram_id,
            first_name=tg_user.get("first_name"),
            last_name=tg_user.get("last_name"),
            username=tg_user.get("username"),
            timezone="UTC",
        )
        db.add(user)
        db.commit()
        db.refresh(user)
    else:
        user.first_name = tg_user.get("first_name")
        user.last_name = tg_user.get("last_name")
        user.username = tg_user.get("username")
        db.commit()
        db.refresh(user)

    token = create_access_token(
        {
            "sub": str(user.id),
            "telegram_id": user.telegram_id,
        }
    )

    return token, user