import { findWeatherIcon } from '../../utils/weatherIcons';
import './MainWeather.css';

const MainWeather = ({ weather }) => {
  const currentWeatherIcon = findWeatherIcon(weather);
  return (
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
  );
};

export default MainWeather;
