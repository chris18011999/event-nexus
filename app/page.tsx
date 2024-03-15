import styles from "./page.module.css";
import { EventData } from "@/types/event";
import EventCard from "@/components/event-card/event-card";

import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from "@prisma/client/runtime/library";

const getEvents = async (): Promise<EventData[] | void> => {
  try {
    const client = new PrismaClient();

    const result = await client.event.findMany({
      include: {
        tags: true
      },
    })
  
    return result;
  } catch(e) {
    console.log(e);

    throw new Error("Nein!")
  }
};
export const dynamic = 'force-dynamic'

export default async function Home() {

  const events = await getEvents();

  return (
    <main>
      <h1>Home</h1>
      {events && events.length > 0 ? <ul>
        {events.map((event: EventData) => {
          return <EventCard key={event.id} event={event}></EventCard>;
        })}
      </ul> : <>No events found</>}
    </main>
  );
}
