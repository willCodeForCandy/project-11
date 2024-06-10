import { useParams } from 'react-router-dom';
import MainWeather from '../../components/MainWeather/MainWeather';
import './Weather.css';

const Weather = ({ list, id }) => {
  const params = useParams();
  console.log(params, list);
  const locationId = params.id || list[0].id;
  const weather = list.find(location => {
    console.log(location.id, location.id === locationId);
    return location.id == locationId;
  });
  console.log(locationId, weather);
  return (
    <>
      {' '}
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
    </>
  );
};

export default Weather;
