## Tanstack Query Suspense Refetch Bug

First, run the development server:

```bash
pnpm i
pnpm dev
```

Go to `http://localhost:3000`. The page will load just fine, but go to the network tab of the dev console in your browser. You will notice requests to `/api/health` recurring every couple of milliseconds.

I intentionally did not include a `loading.ts` file because I prefer the behavior where it waits for the data to fetch on the server before rendering.

It is unclear if this is an issue with Next.js or `@tanstack/router`.
