/**
 * Loading Spinner Component
 * Accessible loading indicator
 */

import './LoadingSpinner.css';

export function LoadingSpinner() {
  return (
    <div className="loading-spinner-container" role="status" aria-live="polite">
      <div className="loading-spinner"></div>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
