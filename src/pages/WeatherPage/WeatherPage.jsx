import { useState, useEffect } from 'react';
import Weather from '../Weather/Weather';
import './WeatherPage.css';
import Aside from '../../components/Aside/Aside';
import { Outlet } from 'react-router-dom';
import { updateWithoutDuplicates } from '../../utils/listUpdater';
import loader from '/assets/loading.gif';
import { apiRequest } from '../../utils/apiRequest';

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
          getWeather(coords);
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const getWeather = async coords => {
    try {
      const weatherReport = await apiRequest({ coords });
      const updatedLocations = updateWithoutDuplicates(
        weatherReport,
        savedLocations
      );

      localStorage.setItem('savedLocations', JSON.stringify(updatedLocations));
      setSavedLocations(updatedLocations);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocalWeather();
  }, []);

  return (
    <div id="weather">
      <Aside onLocationSubmit={getWeather} listOfLocations={savedLocations} />
      {savedLocations.length ? (
        <Weather list={savedLocations} />
      ) : (
        <div className="loader">
          <img src={loader} alt="Nubecita feliz con lluvia" />
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
