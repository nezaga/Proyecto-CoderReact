import './estilos.css';
import 'core-js/actual';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './components/context/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Explorá nuestros productos'/>} />
          <Route exact path="/category/:id" element={<ItemListContainer greeting='Explorá nuestros productos'/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
