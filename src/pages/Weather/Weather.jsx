import './Weather.css';

const Weather = ({ weather }) => {
  return (
    <div>
      {weather && (
        <>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default Weather;
