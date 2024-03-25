import { EventData } from "@/types/event";
import slugify from "@/utils/slugify";

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import Link from "next/link";

export default function EventCard({ event }: { event: EventData }) {
  return (
    <Link href={`/events/${slugify(event.title)}/${event.id}`} className="min-w-[300px]">
      <Card isPressable className="w-[100%] max-w-full h-full break-all rounded-lg">
        <CardHeader className="overflow-visible p-2 w-[100%]">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-[100%] max-w-full"
            src={`${event.image ?? '/trivia.jpg'}`}
          />
        </CardHeader>
        <CardBody className="flex-col items-start overflow-hidden break-word">
          <p className="text-tiny uppercase font-bold">{event.category}</p>
          <h4 className="font-bold text-large">{event.title}</h4>
          <small className="text-default-500" suppressHydrationWarning>{event.date.toLocaleDateString()}</small>
          <small className="text-right">{event.available_space} / {event.capacity}</small>
        </CardBody>
      </Card>
    </Link>
  )
}
