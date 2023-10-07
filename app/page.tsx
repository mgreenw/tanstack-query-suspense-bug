"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

export default function Home() {
  // HELP: this query refetches over and over again, but the component itself doesn't re-render
  const query = useSuspenseQuery({
    queryKey: ["health"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/health");
      return await res.json();
    },
  });

  return <div>Status: {query.data.status}</div>;
}
