import { useState, useEffect } from 'react';
import Weather from '../../components/Weather/Weather';
import './WeatherPage.css';
import Aside from '../../components/Aside/Aside';
import { updateWithoutDuplicates } from '../../utils/listUpdater';
import loader from '/assets/loading.gif';
import { apiRequest } from '../../utils/apiRequest';
import { Route } from 'react-router-dom';

const WeatherPage = () => {
  const [savedLocations, setSavedLocations] = useState(
    JSON.parse(localStorage.getItem('savedLocations')) ?? []
  );
  const [weather, setWeather] = useState();

  const getLocalWeather = () => {
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          updateWeather(coords);
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }; //TODO: agregar propiedad local

  const updateWeather = async coords => {
    try {
      const weatherReport = await apiRequest({ coords });
      const updatedLocations = updateWithoutDuplicates(
        weatherReport,
        savedLocations
      );

      localStorage.setItem('savedLocations', JSON.stringify(updatedLocations));
      setSavedLocations(updatedLocations);
      setWeather(weatherReport);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocalWeather();
  }, []);

  return (
    <div id="weather">
      <Aside
        onLocationSubmit={updateWeather}
        listOfLocations={savedLocations}
      />
      <Route path="/weather/:id" element={<Weather />} />

      {/* {savedLocations.length ? (
        <Weather list={savedLocations} updateWeather={setWeather} />
      ) : (
        <div className="loader">
          <img src={loader} alt="Nubecita feliz con lluvia" />
        </div>
      )} */}
      {console.log(weather)}
    </div>
  );
};

export default WeatherPage;
