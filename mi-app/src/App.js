import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/Catalogo/ItemListContainer';
import ItemDetailContainer from './Components/Catalogo/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar cartItems={0} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>Página no encontrada - Error 404</h2>} />
      </Routes>
    </div>
  );
}

export default App;