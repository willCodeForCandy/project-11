import Location from '../Location/Location';
import Locations from '../Locations/Locations';
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
              <Location
                locationWeather={locationWeatherReport}
                key={locationWeatherReport.id}
              />
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
