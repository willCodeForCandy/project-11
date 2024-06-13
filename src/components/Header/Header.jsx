import { Link, NavLink } from 'react-router-dom';
import logo from '/assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="stitched">
      <Link to="/" className="logo-wrapper">
        <img src={logo} alt="Una gotita de agua muy cuqui" id="logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/weather">Clima</NavLink>
          </li>
          <li>
            <NavLink to="/about">Info</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
