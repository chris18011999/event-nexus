"use client";

export default function ErrorPage({ error }: { error: any }) {
  return (
    <main className="p-10 text-center">
      <h1>An internal server error has occured</h1>
      <pre>{JSON.stringify(error)}</pre>
      <p>Please take a look at the logs {error.digest}</p>
    </main>
  );
}
