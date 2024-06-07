import MainWeather from '../MainWeather/MainWeather';
import './Location.css';

const Location = ({ locationWeather }) => {
  return (
    <li>
      <MainWeather weather={locationWeather} />
    </li>
  );
};

export default Location;
