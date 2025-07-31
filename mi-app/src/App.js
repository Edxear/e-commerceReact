import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <Navbar cartItems={3} />
      <Container welcomeMessage="Bienvenido a nuestra tienda online">
        {/* Aquí irán los productos en el futuro */}
        <p>Próximamente: Catálogo de productos</p>
      </Container>
    </div>
  );
}

export default App;