"use client";

import Link from "next/link";
import { fetchData } from "./data-fetching";

const dataFetch = fetchData("http://localhost:3000/api/health");

export default function Home() {
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
