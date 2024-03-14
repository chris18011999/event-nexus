import { EventData } from "@/types/event";
import style from "./event-card.module.css";
import slugify from "@/utils/slugify";
import Link from "next/link";

export default function EventCard({ event }: { event: EventData }) {
  return (
    <div className={style.card}>
      <Link href={`/events/${slugify(event.title)}/${event.id}`}>
        <h3>{event.title}</h3>
      </Link>
      {event.description && <div>{event.description}</div>}
      {event.date && (
        <span>
          {Intl.DateTimeFormat("nl-nl", { dateStyle: "long" }).format(
            new Date(event.date)
          )}
        </span>
      )}
      {event.tags && (
        <div>
          {event.tags.map((tag) => (
            <Link href={`/tags/${slugify(tag)}`} className="button" key={tag}>
              {tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
