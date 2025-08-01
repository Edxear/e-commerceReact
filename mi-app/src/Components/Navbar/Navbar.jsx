import React from 'react';


import LogoTienda from '../Assets/LogoTienda'; 

const Navbar = ({ cartItems }) => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <LogoTienda />
      </div>

      <ul style={styles.menu}>
        <li>Inicio</li>
        <li>Tienda</li>
        <li>Contacto</li>
        <li>Carrito ({cartItems})</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    width: '150px',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
};


export default Navbar;
