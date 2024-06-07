import { useState, useEffect } from 'react';
import Weather from '../Weather/Weather';
import './WeatherPage.css';
import Aside from '../../components/Aside/Aside';
import { useParams } from 'react-router-dom';

const WeatherPage = () => {
  const params = useParams();
  const [weather, setWeather] = useState();
  const [savedLocations, setSavedLocations] = useState([]);

  const getLocalWeather = () => {
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          fetchWeather(coords);
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
        `${import.meta.env.VITE_BASE_URL}data/2.5/weather?lat=${
          coords.lat
        }&lon=${coords.lon}&appid=${
          import.meta.env.VITE_OPEN_WEATHER_API_KEY
        }&units=metric&lang=es`
      );
      const weatherReport = await res.json();
      console.log(weatherReport);
      setSavedLocations(oldLocationsList => {
        return [weatherReport, ...oldLocationsList];
      });
      console.log(savedLocations);
      setWeather(weatherReport);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocalWeather();
  }, []);
  return (
    <>
      <Aside onLocationSubmit={fetchWeather} listOfLocations={savedLocations} />
      {weather && <Weather weather={weather} />}
    </>
  );
};

export default WeatherPage;
