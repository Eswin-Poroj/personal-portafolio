/**
 * Root Layout Component
 * Main layout with navigation and theme toggle
 */

import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    <div className="root-layout">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
