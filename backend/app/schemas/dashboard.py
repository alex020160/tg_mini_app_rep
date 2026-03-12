from pydantic import BaseModel

from app.schemas.auth import UserInfoResponse
from app.schemas.event import EventResponse
from app.schemas.pet import PetResponse


class PetDashboardResponse(PetResponse):
    next_event: EventResponse | None = None


class DashboardResponse(BaseModel):
    user: UserInfoResponse
    pets: list[PetDashboardResponse]
    upcoming_events: list[EventResponse]