// loading.tsx is a special Next.js file built on top of React Suspense.
// It allows you to create fallback UI to show as a replacement while the page content loads.
// https://nextjs.org/learn/dashboard-app/streaming

// The (overview) folder is a "route group": https://nextjs.org/docs/app/api-reference/file-conventions/route-groups
// A route group can be created by wrapping a folder's name in parenthesis: (folderName).
// This convention indicates the folder is for organizational purposes and should not be included in the route's URL path.
// This makes the loading.tsx file only apply to the dashboard overview page and not to the customers and invoices pages.

import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}
