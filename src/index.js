import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';

const getBasename = () => {
  if (process.env.NODE_ENV !== 'production') {
    return window.location.pathname.startsWith('/africa') ? '/africa' : undefined;
  }

  if (!process.env.PUBLIC_URL) {
    return undefined;
  }

  try {
    return new URL(process.env.PUBLIC_URL).pathname.replace(/\/$/, '') || '/';
  } catch {
    return process.env.PUBLIC_URL.replace(/\/$/, '');
  }
};

const basename = getBasename();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
