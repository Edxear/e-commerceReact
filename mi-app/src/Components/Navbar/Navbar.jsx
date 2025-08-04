import React from 'react';
import LogoTienda from '../Assets/LogoTienda';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <LogoTienda />
      </div>

      <ul className="navbar-links">
        <li>Inicio</li>
        <li>Tienda</li>
        <li>Contacto</li>
        <li className="navbar-cart">
          <FaShoppingCart size={20} />
          {cartItems > 0 && (
            <span className="cart-count">{cartItems}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;