import uuid
from datetime import datetime

from pydantic import BaseModel


class EventBase(BaseModel):
    pet_id: uuid.UUID
    type: str
    title: str
    scheduled_at: datetime
    notes: str | None = None


class EventCreate(EventBase):
    pass


class EventUpdate(BaseModel):
    pet_id: uuid.UUID | None = None
    type: str | None = None
    title: str | None = None
    scheduled_at: datetime | None = None
    notes: str | None = None
    is_done: bool | None = None


class EventResponse(BaseModel):
    id: uuid.UUID
    user_id: uuid.UUID
    pet_id: uuid.UUID
    type: str
    title: str
    scheduled_at: datetime
    is_done: bool
    done_at: datetime | None
    notes: str | None
    created_at: datetime

    model_config = {"from_attributes": True}