import './estilos.css';
import 'core-js/actual';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Hola Bienvenides'/>
    </div>
    
  );
}

export default App;
