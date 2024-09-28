
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Root component of your app
import './index.css'; // Import any global styles, e.g., Tailwind CSS

// Get the container where React should render your app
const container = document.getElementById('root');

// Make sure the container exists before calling createRoot
if (container) {
  // Use createRoot to create a React root and render the App component
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


