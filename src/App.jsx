import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Weather from './pages/Weather/Weather';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <footer className="stitched">
        <a
          href="https://www.flaticon.com/free-icons/weather"
          title="weather icons"
          target="_blank"
        >
          Weather icons created by Freepik - Flaticon
        </a>
      </footer>
    </>
  );
};

export default App;
