import './estilos.css';
import 'core-js/actual';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Hola Bienvenides'/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
