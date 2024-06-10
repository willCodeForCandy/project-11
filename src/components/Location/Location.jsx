import MainWeather from '../MainWeather/MainWeather';
import './Location.css';

const Location = ({ locationWeather }) => {
  return (
    <li className="saved-location">
      <MainWeather weather={locationWeather} />
    </li>
  );
};

export default Location;
