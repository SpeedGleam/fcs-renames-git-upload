
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import axios from "axios";
import App from './App.jsx';
import './assets/styles/main.css'; // Import the CSS file from your assets folder

// To ensure cookies (like JWT) are sent with every request
axios.defaults.withCredentials = true;

// Create the root and render the app
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
