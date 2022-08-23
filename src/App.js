import './estilos.css';
//import logo from './logo.svg';
//import './App.css';
import 'core-js/actual';


function App() {
  console.log(Array.from(new Set([1,2,3,4,1])));
  
  console.log([1,[2,3],[4,[5,[6,7]]]]);
  console.log([1,[2,3],[4,[5,[6,7]]]].flat(2));

  return (
    <div>

    </div>
    
    
    
      
      /*{ <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>} */
  );
}

export default App;
