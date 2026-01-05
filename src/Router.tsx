/**
 * Router Configuration - Hybrid SPA
 * Uses React Router with lazy loading for optimal performance
 */

import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './presentation/components/layout/RootLayout';
import { LoadingSpinner } from './presentation/components/common/LoadingSpinner';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./presentation/pages/HomePage'));
const ProjectDetailPage = lazy(() => import('./presentation/pages/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('./presentation/pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'projects/:id',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProjectDetailPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
