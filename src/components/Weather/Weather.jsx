import { useParams } from 'react-router-dom';
import MainWeatherInfo from '../MainWeatherInfo/MainWeatherInfo';
import './Weather.css';

const Weather = ({ list, updateWeather }) => {
  const params = useParams();
  console.log(list);
  const locationId = params.id || list[0].id;
  const weather = list.find(location => location.id == locationId);
  updateWeather(weather);

  return (
    <section
      id="main-weather"
      className="stitched"
      style={{
        backgroundColor: weather.clouds.all > 50 && 'var(--color-cloudy-day)',
      }}
    >
      <MainWeatherInfo weather={weather} />
      <div className="additional-info">
        <ul>
          <li>
            <b>Viento:</b> {weather.wind.speed} m/s
          </li>
          <li>
            <b>Presión:</b> {weather.main.pressure} hPa
          </li>
          <li>
            <b>Humedad:</b> {weather.main.humidity} %
          </li>
          <li>
            <b>Nubosidad:</b> {weather.clouds.all} %
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Weather;
