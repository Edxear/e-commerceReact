import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container/Container';

function App() {
  return (
    <div className="App">
      <Navbar cartItems={0} />
      <Container welcomeMessage="Bienvenido a nuestra tienda online">
        {/* Productos a futuro */}
        <p>Próximamente: Catálogo de productos</p>
      </Container>
    </div>
  );
}

export default App;