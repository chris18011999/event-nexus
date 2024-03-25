import { Suspense } from "react";
import { EventList } from "@/components/event-list/event-list";
import {
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  Link,
  Skeleton,
} from "@nextui-org/react";
import EventCard from "@/components/event-card/event-card";

function LoadingEventList({ count = 5 }: { count: number }) {
  return (
    <div className="overflow-x-auto flex gap-x-3">
      {Array(count)
        .fill(null)
        .map((value, index) => {
          return (
            <Skeleton key={index} className="min-w-[300px] h-[350px] overflow-hidden rounded-lg">
              <Link href="">
                <Card isPressable className="w-[300px] h-[350px]">
                  <CardHeader className="overflow-visible p-2 w-[100%]"></CardHeader>
                  <CardBody className="flex-col items-start overflow-hidden break-word"></CardBody>
                </Card>
              </Link>
            </Skeleton>
          );
        })}
    </div>
  );
}

export default async function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Suspense fallback={<LoadingEventList count={5} />}>
        <EventList />
      </Suspense>
    </main>
  );
}
