import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ✅ This line loads Tailwind
import App from './App';
import { SessionProvider } from './SessionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SessionProvider>
    <App />
  </SessionProvider>
);
