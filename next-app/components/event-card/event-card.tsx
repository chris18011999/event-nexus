'use client';

import { EventData } from "@/types/event";
import style from "./event-card.module.css";
import slugify from "@/utils/slugify";


import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Link} from "@nextui-org/react";

export default function EventCard({ event }: { event: EventData }) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{event.title}</p>
          <p className="text-small text-default-500">{event.date.toLocaleDateString()}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{event.description}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          showAnchorIcon
          href={`/events/${slugify(event.title)}/${event.id}`}
        >
          View event
        </Link>
      </CardFooter>
    </Card>
  )
}
