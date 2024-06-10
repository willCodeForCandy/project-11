const getLocalWeather = () => {
  if (navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      p => {
        getLocalWeather(p);
      },
      error => {
        console.error('Error getting user location:', error);
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
};

const getlocalWeather = async position => {
  const coords = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
  const newWeather = await fetchWeather(coords);
  setWeather(newWeather);
};
const fetchWeather = async coords => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}data/2.5/weather?lat=${coords.lat}&lon=${
        coords.lon
      }&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=metric&lang=es`
    );
    const weatherReport = await res.json();
    return weatherReport;
  } catch (error) {
    console.error(error);
  }
};

if (!savedLocations.find(location => location.id === weatherReport.id)) {
  let updatedLocations = [weatherReport, ...savedLocations];
  localStorage.setItem('savedLocations', JSON.stringify(updatedLocations));
  setSavedLocations(updatedLocations);
}
setWeather(weatherReport);
