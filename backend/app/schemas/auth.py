import uuid

from pydantic import BaseModel


class TelegramAuthRequest(BaseModel):
    init_data: str


class UserInfoResponse(BaseModel):
    id: uuid.UUID
    telegram_id: int
    first_name: str | None
    last_name: str | None
    username: str | None
    timezone: str

    model_config = {"from_attributes": True}


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserInfoResponse