## Example Next.js App Dir Data Fetching With No Defined Suspense Boundaries

This example demonstrates how data fetching with suspense works in the Next.js app router when no manual suspense boundaries are defined (either with `loading.tsx` or `<Suspense>`). By default, when no boundaries are defined, Next.js will block the streaming SSR until the data is fetched, and on the client side will also block client navigation on page change until the data is fetched.

This example is meant to aid in discussion related to [this `@tanstack/query`` issue](https://github.com/TanStack/query/issues/6116).

First, run the development server:

```bash
pnpm i
pnpm dev
```

Things to try:

1. Load `/` directly and watch the SSR block for 3s while the data is fetched
2. Load `/page2` and then navigate to this page by clicking the link. The navigation will be blocked
   for 3s while the data is fetched, and then this page will display.
