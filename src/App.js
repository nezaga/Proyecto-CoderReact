import './estilos.css';
import 'core-js/actual';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='Hola Bienvenides'/>} />
        <Route exact path="/category/:id" element={<ItemListContainer greeting='Hola Bienvenides'/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        {/* <ItemListContainer greeting='Hola Bienvenides'/>
        <ItemDetailContainer/>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
