import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import About from './pages/About/About.jsx';
import WeatherPage from './pages/WeatherPage/WeatherPage.jsx';
import Weather from './components/Weather/Weather.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
