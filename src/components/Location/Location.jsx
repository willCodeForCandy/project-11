import MainWeatherInfo from '../MainWeatherInfo/MainWeatherInfo';
import './Location.css';

// obtengo la info de la lista //!el state weather NO ESTA INVOLUCRADO
const Location = ({ locationWeather }) => {
  return (
    <li
      className="saved-location"
      style={{
        backgroundColor:
          locationWeather.clouds.all > 50 && 'var(--color-cloudy-day)',
        outlineColor:
          locationWeather.clouds.all > 50 && 'var(--color-cloudy-day)',
      }}
    >
      <MainWeatherInfo weather={locationWeather} />
    </li>
  );
};

export default Location;
