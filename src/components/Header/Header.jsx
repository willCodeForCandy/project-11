import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="stitched">
      <nav>
        <ul>
          <li>
            <NavLink to="/weather">Clima</NavLink>
          </li>
          <li>
            <NavLink to="/about">Info</NavLink>
          </li>
          <li>
            <NavLink to="/help">Ayuda</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
