import { EventData } from "@/types/event";
import { PrismaClient } from "@prisma/client";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

const getEventDetails = async (eventId: number): Promise<EventData> => {
  const client = new PrismaClient();

  const foundEvent = await client.event.findFirst({
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

export async function generateMetadata(
  { params }: { params: { slug: string; id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const event = await getEventDetails(Number(params.id));

  return {
    title: `EventNexus - ${event.title}`,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const eventId: number = Number(params.id);
  const foundEvent = await getEventDetails(eventId);

  return (
    <>
      <h1>{foundEvent.title}</h1>
      <pre>{JSON.stringify(foundEvent)}</pre>

      {foundEvent.location && <iframe width="500" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?width=500&height=500&hl=en&q=${[foundEvent.location?.latitude, foundEvent.location?.longitude].join(',')}&ie=UTF8&iwloc=B&output=embed`}></iframe>}
    </>
  );
}
