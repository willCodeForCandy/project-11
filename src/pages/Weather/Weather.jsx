import MainWeather from '../../components/MainWeather/MainWeather';
import { findWeatherIcon, weatherIcons } from '../../utils/weatherIcons';
import './Weather.css';

const Weather = ({ weather }) => {
  return (
    <>
      <section id="main-weather" className="stitched">
        <h2>
          {weather.name}, {weather.sys.country}
        </h2>
        <MainWeather weather={weather} />
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
    </>
  );
};

export default Weather;
