/**
 * Main App Component
 * Portfolio Professional - Clean Architecture
 */

import { ThemeProvider } from './presentation/context/ThemeContext';
import { Router } from './Router';
import './presentation/styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
