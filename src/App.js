import './estilos.css';
import 'core-js/actual';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './components/context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Hola Bienvenides'/>} />
          <Route exact path="/category/:id" element={<ItemListContainer greeting='Hola Bienvenides'/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
