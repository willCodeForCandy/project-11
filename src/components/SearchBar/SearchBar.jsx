import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ fetchWeather }) => {
  const [userInput, setUserInput] = useState('');
  const [locationList, setLocationList] = useState([]);

  const handleChange = e => {
    setUserInput(e.target.value);
  };
  const getCoords = async cityName => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}geo/1.0/direct?q=${cityName}&appid=${
          import.meta.env.VITE_OPEN_WEATHER_API_KEY
        }&units=metric&lang=es`
      );
      const response = await res.json();
      const coords = {
        lat: response[0].lat,
        lon: response[0].lon,
      };
      console.log(response);
      return coords;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e, cityName) => {
    e.preventDefault();
    const coords = await getCoords(cityName);
    fetchWeather(coords);
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
        placeholder="Buscar"
        type="search"
        name="q"
        value={userInput}
        onChange={e => handleChange(e)}
      />

      <button type="submit">🔍</button>
    </form>
  );
};

export default SearchBar;
