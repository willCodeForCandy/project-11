import { useState } from 'react';
import searchIcon from '/assets/search.png';
import './SearchBar.css';
import { apiRequest } from '../../utils/apiRequest';

//! Necesito getCoords, getWeather, y storeWeather
const SearchBar = ({ getAndUpdateWeather }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = e => {
    setUserInput(e.target.value);
  };
  /* Función para obtener las coordenadas a partir del nombre de la ciudad */
  const getCoords = async cityName => {
    try {
      const cityLocation = await apiRequest({
        geolocation: true,
        cityName,
      });
      if (typeof cityLocation !== 'string') {
        return {
          lat: cityLocation[0].lat,
          lon: cityLocation[0].lon,
        };
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e, cityName) => {
    e.preventDefault();
    const coords = await getCoords(cityName);
    getAndUpdateWeather(coords); //actualiza la lista y el estado individual
  };

  return (
    <form
      id="search-form"
      role="search"
      onSubmit={e => handleSubmit(e, userInput)}
    >
      <input
        id="q"
        aria-label="Buscar por ciudad"
        placeholder="Buscar por ciudad"
        type="search"
        name="q"
        value={userInput}
        onChange={e => handleChange(e)}
      />

      <button type="submit">
        <img src={searchIcon} alt="Lupa" />
      </button>
    </form>
  );
};

export default SearchBar;
