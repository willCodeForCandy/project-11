import { weatherIcons } from '../../utils/weatherIcons';
import './Weather.css';

const Weather = ({ weather }) => {
  const currentWeatherIcon = weatherIcons.find(iconObject =>
    iconObject.codes.includes(weather.weather[0].id)
  );

  return (
    <>
      <section id="main-weather">
        <h2>
          {weather.name}, {weather.sys.country}
        </h2>
        <div className="main-weather">
          <div>
            <p className="temp">{weather.main.temp.toFixed(0)}º</p>
            <p className="description">{weather.weather[0].description}</p>
          </div>
          <div className="weather-icon">
            <img
              src={currentWeatherIcon.img}
              alt={currentWeatherIcon.weatherCondition}
            />
          </div>
        </div>
        <div className="additional-info">
          <ul>
            <li>Viento: {weather.wind.speed}m/s</li>
            <li>Presión: {weather.main.pressure}hPa</li>
            <li>Humedad: {weather.main.humidity}%</li>
            <li>Nubosidad: {weather.clouds.all}%</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Weather;
