from datetime import datetime, timezone

from sqlalchemy.orm import Session

from app.models.event import Event
from app.models.pet import Pet
from app.models.user import User


def get_dashboard_data(db: Session, user: User, upcoming_limit: int = 5) -> dict:
    pets = (
        db.query(Pet)
        .filter(Pet.user_id == user.id)
        .order_by(Pet.created_at.desc())
        .all()
    )

    now = datetime.now(timezone.utc)

    upcoming_events = (
        db.query(Event)
        .filter(
            Event.user_id == user.id,
            Event.is_done.is_(False),
            Event.scheduled_at >= now,
        )
        .order_by(Event.scheduled_at.asc())
        .limit(upcoming_limit)
        .all()
    )

    pets_with_next_event = []
    for pet in pets:
        next_event = (
            db.query(Event)
            .filter(
                Event.user_id == user.id,
                Event.pet_id == pet.id,
                Event.is_done.is_(False),
                Event.scheduled_at >= now,
            )
            .order_by(Event.scheduled_at.asc())
            .first()
        )

        pets_with_next_event.append(
            {
                "id": pet.id,
                "user_id": pet.user_id,
                "name": pet.name,
                "species": pet.species,
                "sex": pet.sex,
                "birthdate": pet.birthdate,
                "weight_kg": pet.weight_kg,
                "photo_url": pet.photo_url,
                "created_at": pet.created_at,
                "next_event": next_event,
            }
        )

    return {
        "user": user,
        "pets": pets_with_next_event,
        "upcoming_events": upcoming_events,
    }