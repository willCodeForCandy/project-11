import { useState } from 'react';
import searchIcon from '/assets/search.png';
import './SearchBar.css';
import { apiRequest } from '../../utils/apiRequest';

const SearchBar = ({ getWeather }) => {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(false);

  const handleChange = e => {
    setUserInput(e.target.value);
  };
  const getCoords = async cityName => {
    try {
      const cityLocation = await apiRequest({
        geolocation: true,
        cityName,
      });
      if (typeof cityLocation === 'string') {
        const errorMessage = cityLocation;
        return errorMessage; //TODO Arreglar esta inmundicia
      }
      const coords = {
        lat: cityLocation[0].lat,
        lon: cityLocation[0].lon,
      };
      return coords;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e, cityName) => {
    e.preventDefault();
    const coords = await getCoords(cityName);
    const weatherReport = await getWeather(coords);
    weatherReport ? setError(false) : setError(true);
  };

  return (
    <>
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
      {error && <p>Ciudad no encontrada</p>}
    </>
  );
};

export default SearchBar;
