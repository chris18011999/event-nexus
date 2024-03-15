'use client';

import { EventData } from "@/types/event";
import slugify from "@/utils/slugify";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Chip} from "@nextui-org/react";

export default function EventCard({ event }: { event: EventData }) {
  console.log(event)
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{event.title}</p>
          <p className="text-small text-default-500" suppressHydrationWarning>{event.date.toLocaleDateString()}</p>
          {event.tags?.map((tag) => {
            return <Link href={`/tags/${tag.slug}`}><Chip variant="solid" color="secondary">{tag.name}</Chip></Link>
          })}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{event.description}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          href={`/events/${slugify(event.title)}/${event.id}`}
        >
          View event
        </Link>
      </CardFooter>
    </Card>
  )
}
