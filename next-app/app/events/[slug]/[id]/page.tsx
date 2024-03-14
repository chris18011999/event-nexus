import { EventData } from "@/types/event";
import { PrismaClient } from "@prisma/client";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

const client = new PrismaClient();

const getEventDetails = async (eventId: number): Promise<EventData> => {
  const foundEvent = await client.event.findFirst({
    where: {
      id: {
        equals: eventId
      }
    }
  })
  if (foundEvent == null) {
    notFound();
  }

  return foundEvent;
};

export async function generateMetadata(
  { params }: { params: { slug: string, id: string } } ,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const event = await getEventDetails(Number(params.id));

  return {
    title: `EventNexus - ${event.title}`
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string, id: string };
}) {
  const eventId: number = Number(params.id);
  const foundEvent = await getEventDetails(eventId);

  return (
    <>
      <h1>{foundEvent.title}</h1>
      <pre>{JSON.stringify(foundEvent)}</pre>
    </>
  );
}
