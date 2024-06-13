import { Link } from 'react-router-dom';
import Location from '../Location/Location';
import SearchBar from '../SearchBar/SearchBar';
import './Aside.css';

const Aside = ({ onLocationSubmit, listOfLocations }) => {
  return (
    <aside className="stitched">
      <SearchBar getAndUpdateWeather={onLocationSubmit} />
      {/* Paso la funcion para solicitar y guardar la ubicacion. //! Actualiza la lista y el estado individual */}
      <nav>
        <ul>
          {listOfLocations.length ? (
            listOfLocations.map(locationWeatherReport => (
              <Link
                to={`/weather/${locationWeatherReport.id}`}
                key={locationWeatherReport.id}
              >
                <Location
                  locationWeather={locationWeatherReport}
                  // handleClick={updateWeather}
                />
                {/* Cuando hago click, modifico el estado de la ubicación a mostrar? */}
              </Link>
            ))
          ) : (
            <p>
              No hay ubicaciones guardadas. Puedes activar la geolocalización
              para obtener los datos de tu ubicación actual, o buscar la
              información de cualquier ciudad.
            </p>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
