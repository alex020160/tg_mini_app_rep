import uuid
from datetime import date, datetime
from decimal import Decimal

from pydantic import BaseModel, Field

from app.models.enums import PetSex, PetSpecies


class PetBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=128)
    species: PetSpecies
    sex: PetSex = PetSex.UNKNOWN
    birthdate: date | None = None
    weight_kg: Decimal | None = Field(default=None, ge=0, le=200)
    photo_url: str | None = Field(default=None, max_length=512)


class PetCreate(PetBase):
    pass


class PetUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=128)
    species: PetSpecies | None = None
    sex: PetSex | None = None
    birthdate: date | None = None
    weight_kg: Decimal | None = Field(default=None, ge=0, le=200)
    photo_url: str | None = Field(default=None, max_length=512)


class PetResponse(PetBase):
    id: uuid.UUID
    user_id: uuid.UUID
    created_at: datetime

    model_config = {"from_attributes": True}