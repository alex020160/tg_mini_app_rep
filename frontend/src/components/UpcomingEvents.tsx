import type { Event } from "@/shared/types/dashboard";

type Props = {
  events: Event[];
};

export default function UpcomingEvents({ events }: Props) {
  return (
    <div>
      <h3>Upcoming events</h3>

      {events.length === 0 && <div>No upcoming events</div>}

      {events.map((event) => (
        <div key={event.id}>
          <div>{event.title}</div>
          <div>{new Date(event.start_at).toLocaleDateString()}</div>
        </div>
      ))}
    </div>
  );
}
