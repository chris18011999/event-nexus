import EventCard from "@/components/event-card/event-card";
import { EventData } from "@/types/event";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";


export async function generateMetadata(
  { params }: { params: { tag: string } } ,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tag = params.tag;

  return {
    title: `EventNexus - Search result for "${tag}"`
  }
}

async function getEventsByTag(tag: string): Promise<EventData[]> {
  if(!tag) {
    notFound();
  }

  const events: EventData[] = require("../../../data/events.json");
  const foundEvents = events.filter(
    (event: EventData) => event.tags && event.tags.indexOf(tag) > 0 
  );

  return foundEvents;
}

export default async function EventListTags({ params } : { params: { tag: string }}) {
    const events = await getEventsByTag(params.tag);

    if(!events.length) {
      return <h1>No events found for &quot;{params.tag}&quot;</h1>
    }

    return <div>
      {events.map(event => <EventCard key={event.id} event={event}/>)}
    </div>
}