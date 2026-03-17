import "./upcoming-events.css";

type EventItem = {
  id: number;
  weekday: string;
  day: string;
  title: string;
  time: string;
  subtitle: string;
};

type UpcomingEventsProps = {
  events: EventItem[];
};

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section className="O-EventsCard">
      {events.map((event, index) => (
        <div key={event.id} className="M-EventRow">
          <div className="M-EventRow__date">
            <div className="M-EventRow__weekday">{event.weekday}</div>
            <div className="M-EventRow__day">{event.day}</div>
          </div>

          <div className="M-EventRow__content">
            <div className="M-EventRow__title">{event.title}</div>
            <div className="M-EventRow__meta">
              {event.time} {event.subtitle}
            </div>
          </div>

          {index !== events.length - 1 && (
            <div className="M-EventRow__divider" />
          )}
        </div>
      ))}

      <div className="O-EventsCard__footer">Посмотреть все</div>
    </section>
  );
}
