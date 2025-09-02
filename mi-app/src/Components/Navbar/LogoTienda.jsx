import React from 'react';

const LogoTienda = () => (
  <svg
    width="140"
    height="60"
    viewBox="0 0 200 80"
    xmlns="http://www.w3.org/2000/svg"
  >
   {/* Camiseta */}
<g transform="scale(1.1) translate(10, 5)">
  <path
    d="M30 20 
       Q35 10 50 10 
       Q65 10 70 20 
       L80 25 
       L70 60 
       Q68 65 60 65 
       H40 
       Q32 65 30 60 
       L20 25 Z"
    fill="#1A1A1A"
    stroke="#ffffff"
    strokeWidth="2"
  />
  <line x1="40" y1="20" x2="40" y2="45" stroke="#fff" strokeWidth="1.5" />
  <line x1="60" y1="20" x2="60" y2="45" stroke="#fff" strokeWidth="1.5" />
</g>

    {/* Datos tienda */}
    <text
      x="110"
      y="45"
      fontFamily="'Segoe UI', sans-serif"
      fontSize="16"
      fontWeight="bold"
      fill="#222"
    >
      URBÁNIKA
    </text>
    <text
      x="110"
      y="60"
      fontFamily="'Segoe UI', sans-serif"
      fontSize="12"
      fill="#666"
    >
      Tienda Online
    </text>
  </svg>
);

export default LogoTienda;