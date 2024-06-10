import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2>Acerca de kawaiiWeather</h2>
      <p>Esta aplicación está hecha con React y js vanilla.</p>
      <p>
        Los datos del clima fueron obtenidos con la api de{' '}
        <a href="https://openweathermap.org/" target="_blank">
          OpenWeather
        </a>
        .
      </p>
      <p>
        Las imágenes son de{' '}
        <a href="https://www.flaticon.com/" target="_blank">
          Flaticon
        </a>
        .
      </p>
    </section>
  );
};

export default About;
