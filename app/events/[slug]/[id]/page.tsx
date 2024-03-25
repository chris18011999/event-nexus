import { EventData } from "@/types/event";
import slugify from "@/utils/slugify";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const client = new PrismaClient({
    log: ['query']
  });
  const events = await client.event.findMany()
 
  return events.map((event) => ({
    slug: slugify(event.title),
    id: `${event.id}`
  }))
}

const getEventDetails = async (eventId: number): Promise<EventData> => {

  const client = new PrismaClient({
    log: ['query']
  });

  const foundEvent = await client.event.findFirst({
    include: {
      location: true,
      tags: true,
    },
    where: {
      id: {
        equals: eventId,
      },
    },
  });
  if (foundEvent == null) {
    notFound();
  }

  return foundEvent;
};

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const eventId: number = Number(params.id);
  const foundEvent = await getEventDetails(eventId);

  return (
    <main>
      <h1>{foundEvent.title}</h1>
      
      <address>
        {foundEvent.location?.name}<br/>
        {foundEvent.location?.street} {foundEvent.location?.house_number}<br/>
        {foundEvent.location?.city}<br/>
        {foundEvent.location?.country}
      </address>

      {foundEvent.location && <iframe width="500" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?width=500&height=500&hl=en&q=${[foundEvent.location?.name, foundEvent.location?.street, foundEvent.location?.house_number, foundEvent.location?.city, foundEvent.location?.country].join(',')}&ie=UTF8&iwloc=B&output=embed`}></iframe>}
    </main>
  );
}
