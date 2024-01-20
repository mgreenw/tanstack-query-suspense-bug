"use client";

import Link from "next/link";
import { fetchData } from "./data-fetching";

// THINGS TO TRY:
// 1. Load this page directly and watch the SSR block for 3s while the data is fetched
// 2. Load /page2 and then navigate to this page by clicking the link. The navigation will be blocked
//    for 3s while the data is fetched, and then this page will display.

// Create the data fetch outside of the render cycle to avoid creating a new promise on each render
// Real data fetching libraries use things like lookup keys to avoid this, but this is a simple
// example so we don't worry about that here
const dataFetch = fetchData("http://localhost:3000/api/health");

export default function Home() {
  // Read the data from the fetch. This will throw a Promise if the data is not ready, which will be
  // caught by React Suspense. There is no defined loading state, either with a loading.tsx or
  // manual suspense boundary, so by default Next.js will just block until the promise resolves
  // SERVER: This will block SSR until the data is ready
  // CLIENT: This will block rendering / navigation until the data is ready
  const data = dataFetch.read();

  return (
    <div>
      <h3>
        Status: {data.status}, Wait: {data.wait}
      </h3>
      <Link href="/page2">Page 2</Link>
    </div>
  );
}
