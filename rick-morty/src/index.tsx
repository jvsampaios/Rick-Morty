import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
