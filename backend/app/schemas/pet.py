import uuid
from datetime import date, datetime
from decimal import Decimal

from pydantic import BaseModel


class PetBase(BaseModel):
    name: str
    species: str
    sex: str = "unknown"
    birthdate: date | None = None
    weight_kg: Decimal | None = None
    photo_url: str | None = None


class PetCreate(PetBase):
    pass


class PetUpdate(BaseModel):
    name: str | None = None
    species: str | None = None
    sex: str | None = None
    birthdate: date | None = None
    weight_kg: Decimal | None = None
    photo_url: str | None = None


class PetResponse(PetBase):
    id: uuid.UUID
    user_id: uuid.UUID
    created_at: datetime

    model_config = {"from_attributes": True}