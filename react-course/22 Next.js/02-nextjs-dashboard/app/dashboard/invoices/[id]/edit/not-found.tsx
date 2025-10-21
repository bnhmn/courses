import Link from 'next/link';

import { FaceFrownIcon } from '@heroicons/react/24/outline';

// The not-found.tsx file can be used to define a 404 Not Found page.
// Invoke the notFound function of Next.js to render the NotFound component instead of the Page component.
// Try it out: http://localhost:3000/dashboard/invoices/2e94d1ed-d220-449f-9f11-f0bbceed9645/edit
// not-found takes precedence over error.tsx, so you can reach out for it when you want to handle more specific errors!

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
