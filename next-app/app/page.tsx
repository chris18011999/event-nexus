import styles from "./page.module.css";
import { EventData } from "@/types/event";
import EventCard from "@/components/event-card/event-card";

import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from "@prisma/client/runtime/library";

const getEvents = async (): Promise<EventData[]> => {
  const client = new PrismaClient();

  return await client.event.findMany()
};
export const dynamic = 'force-dynamic'

export default async function Home() {

  const events = await getEvents();

  return (
    <main>
      <h1>Home</h1>
      {events.length > 0 ? <ul>
        {events.map((event: EventData) => {
          return <EventCard key={event.id} event={event}></EventCard>;
        })}
      </ul> : <>No events found</>}
    </main>
  );
}
