import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import "./assets/styles/dark-theme.css";
import App from './App';
import { DarkThemeProvider } from "./context/DarkThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkThemeProvider>
      <App />
    </DarkThemeProvider>
  </React.StrictMode>
);
