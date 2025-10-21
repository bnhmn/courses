# Next.js App Router Course

This is the starter template for the Next.js App Router Course. It contains the code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## How to Run

- Run `npm ci` to install the dependencies.
- Run `docker compose up -d` to start the database.
- Run `npm run dev` to start the development server.

## How to Change

- Run `npm run db:watch` if you want to add or modify the database queries.

## Folder Structure

<https://nextjs.org/docs/app/getting-started/project-structure>

```text
── app             Contains all routes and high level components
   ├───lib         Reusable utility and data fetching functions
   └───ui          Contains UI components like cards, tables, and forms
── public          Static assets for the application, such as images
── next.config.ts  Next.js configuration file
```

## Routing

<https://nextjs.org/docs/app/getting-started/layouts-and-pages>

Next.js uses file-system routing where folders are used to create nested routes. Each folder represents a route segment that maps to a URL segment.
