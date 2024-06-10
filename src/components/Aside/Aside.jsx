import { Link } from 'react-router-dom';
import Location from '../Location/Location';
import SearchBar from '../SearchBar/SearchBar';
import './Aside.css';

const Aside = ({ onLocationSubmit, listOfLocations }) => {
  console.log(listOfLocations);
  return (
    <aside className="stitched">
      <SearchBar fetchWeather={onLocationSubmit} />
      <nav>
        <ul>
          {listOfLocations.length ? (
            listOfLocations.map(locationWeatherReport => (
              <Link to={`/weather/${locationWeatherReport.id}`}>
                <Location
                  locationWeather={locationWeatherReport}
                  key={locationWeatherReport.id}
                />
              </Link>
            ))
          ) : (
            <p>No hay ubicaciones guardadas</p>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
