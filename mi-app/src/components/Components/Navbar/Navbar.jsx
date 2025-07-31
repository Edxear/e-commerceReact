import React from 'react';
import './Navbar.css';
import cartIcon from '../../assets/cart-icon.svg'; // Asegúrate de tener este icono

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi Tienda</div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <div className="navbar-cart">
        <img src={cartIcon} alt="Carrito" />
        <span className="cart-count">{cartItems}</span>
      </div>
    </nav>
  );
};

export default Navbar;