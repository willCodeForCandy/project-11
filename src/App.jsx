import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Weather from './pages/Weather/Weather';

const App = () => {
  // const [coords, setCoords] = useState({});
  const [weather, setWeather] = useState();

  const getLocalWeather = () => {
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          console.log('coords', coords);
          // setCoords(coords);
          fetchWeather(coords);
          // return coords;
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  const fetchWeather = async coords => {
    try {
      console.log('coords2', coords);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          coords.lat
        }&lon=${coords.lon}&appid=${
          import.meta.env.VITE_OPEN_WEATHER_API_KEY
        }&units=metric&lang=es`
      );
      const response = await res.json();
      console.log(response);
      setWeather(response);
      console.log(weather);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocalWeather();
  }, []);

  return (
    <>
      <header className="stitched">Header</header>
      <main className="stitched">
        {weather && (
          <>
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
          </>
        )}
      </main>
      <aside className="stitched">Aside</aside>
      <footer className="stitched">
        <a
          href="https://www.flaticon.com/free-icons/weather"
          title="weather icons"
        >
          Weather icons created by Freepik - Flaticon
        </a>
      </footer>
    </>
  );
};

export default App;
