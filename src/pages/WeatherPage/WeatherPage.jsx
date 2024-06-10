import { useState, useEffect } from 'react';
import Weather from '../Weather/Weather';
import './WeatherPage.css';
import Aside from '../../components/Aside/Aside';
import { Outlet } from 'react-router-dom';
import { updateWithoutDuplicates } from '../../utils/listUpdater';

const WeatherPage = () => {
  const [savedLocations, setSavedLocations] = useState(
    JSON.parse(localStorage.getItem('savedLocations')) ?? []
  );

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
      alert('Geolocation is not supported by this browser.');
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
      const updatedLocations = updateWithoutDuplicates(
        weatherReport,
        savedLocations
      );

      localStorage.setItem('savedLocations', JSON.stringify(updatedLocations));
      setSavedLocations(updatedLocations);

      // setWeather(weatherReport);
    } catch (error) {
      console.error(error);
    }
  };
  // const getLocalWeather = () => {
  //   if (navigator.geolocation) {
  //     window.navigator.geolocation.getCurrentPosition(getWeatherByCoords);
  //   } else {
  //     console.log('Geolocation is not supported by this browser.');
  //   }
  // };

  // const getWeatherByCoords = async position => {
  //   const coords = {
  //     lat: position.coords.latitude,
  //     lon: position.coords.longitude,
  //   };
  //   const weatherReport = await fetchWeather(coords);
  //   setWeather(weatherReport);
  // };
  // const fetchWeather = async coords => {
  //   try {
  //     const res = await fetch(
  //       `${import.meta.env.VITE_BASE_URL}data/2.5/weather?lat=${
  //         coords.lat
  //       }&lon=${coords.lon}&appid=${
  //         import.meta.env.VITE_OPEN_WEATHER_API_KEY
  //       }&units=metric&lang=es`
  //     );
  //     const weatherReport = await res.json();
  //     const updatedLocations = updateWithoutDuplicates(
  //       weatherReport,
  //       savedLocations
  //     );
  //     localStorage.setItem('savedLocations', JSON.stringify(updatedLocations));
  //     setSavedLocations(updatedLocations);
  //     return weatherReport;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    getLocalWeather();
  }, []);

  return (
    <>
      <Aside onLocationSubmit={fetchWeather} listOfLocations={savedLocations} />
      <section id="main-weather" className="stitched">
        {savedLocations.length && <Weather list={savedLocations} />}
      </section>
    </>
  );
};

export default WeatherPage;
