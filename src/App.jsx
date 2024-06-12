import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Weather from './pages/Weather/Weather';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default App;
