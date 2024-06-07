import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Weather from './pages/Weather/Weather';

const App = () => {
  return (
    <>
      <header className="stitched">
        {' '}
        <nav>
          <ul>
            <li>
              <NavLink to="/">El clima</NavLink>
            </li>
            <li>
              <NavLink to="/about">Acerca de</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacto</NavLink>
            </li>
          </ul>
        </nav>
      </header>
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
