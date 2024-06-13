import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import About from './pages/About/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
