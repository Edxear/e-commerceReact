import React from 'react';
import { Link } from 'react-router-dom';
import LogoTienda from './LogoTienda'; 
import './Navbar.css';
import CartWidget from './CartWidget';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <LogoTienda />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/Remeras">Remeras</Link></li>
        <li><Link to="/category/Buzos">Buzos</Link></li>
        <li>Contacto</li>
        <li>
          <CartWidget cartItems={cartItems} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;