import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import { APP_BASENAME } from './api/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={APP_BASENAME}> {/* Only one BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
