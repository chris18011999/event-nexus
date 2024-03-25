import { queryAllEvents } from "@/database";
import { EventData } from "@/types/event";
import EventCard from "../event-card/event-card";

export async function EventList() {
  const events = await queryAllEvents({ withTags: true });

  return events && events.length > 0 ? (
    <div className="overflow-x-auto flex gap-x-3">
      {[...events, ...events, ...events].map((event: EventData) => {
        return <EventCard key={event.id} event={event}></EventCard>;
      })}
    </div>
  ) : (
    <>No events found</>
  );
}
