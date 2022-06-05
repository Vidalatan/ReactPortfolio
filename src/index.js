import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from './ContextProviders/Theme/ThemeContext';
import RouterProvider from './ContextProviders/Router/RouterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </RouterProvider>
  </React.StrictMode>
);
