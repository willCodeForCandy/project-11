import { useState, useEffect } from 'react';
import Weather from '../Weather/Weather';
import './WeatherPage.css';

const WeatherPage = () => {
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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocalWeather();
  }, []);
  return (
    <>
      <aside className="stitched">Aside</aside>
      {weather && <Weather weather={weather} />}
    </>
  );
};

export default WeatherPage;
