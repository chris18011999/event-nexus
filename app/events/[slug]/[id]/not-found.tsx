import Link from "next/link";

export default function EventDetailNotFound() {
    return <>
    <h1>Event could not be found</h1>
    <Link href="/" className="button secondary">Back home</Link>
    </>
}