import { findWeatherIcon } from '../../utils/weatherIcons';
import './MainWeather.css';

const MainWeather = ({ weather }) => {
  const currentWeatherIcon = findWeatherIcon(weather);
  return (
    <>
      <h2 className="chubby-title">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="main-weather">
        <div className="description">
          <p className="temp">{weather.main.temp.toFixed(0)}º</p>
          <p>{weather.weather[0].description}</p>
        </div>
        <div className="weather-icon">
          <img
            src={currentWeatherIcon.img}
            alt={currentWeatherIcon.weatherCondition}
          />
        </div>
      </div>
    </>
  );
};

export default MainWeather;
