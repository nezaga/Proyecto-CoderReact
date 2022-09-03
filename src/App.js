import './estilos.css';
import 'core-js/actual';
<<<<<<< HEAD
import { Component, useState } from 'react';
=======
import NavBar from './components/NavBar';
>>>>>>> d1-menu

function SuperForm (props) {
  console.log(props);
  return (
      <div>
        <h1>{props.title}</h1>
        {props.children}
      </div>
  )
}

const SuperButton = () => {
  return (
    <input type="button" value="Click Me!" />
  )
}

class SuperState extends Component {
  constructor() {
    super(); // Es obligatorio ejecutar la función super() antes de usar el this en el consturctor
    this.state = {
      curso: "React",
      lugar: "En casita"
    }
  }

  updateName = () => {
    this.setState(
      {curso: "ReacTionario"}
      );
  }

  render() {
    return (
      <div onClick={this.updateName}>
        <h1>Welcome to Curso de {this.state.curso}. {this.state.lugar}</h1>
      </div>
    )
  }
}

function StateHook () {
  const [name, setName] = useState('ReactClass');
  return (
    <div onClick={()=> setName('ReactFunction')}>
      <h2>Hola {name}</h2>
    </div>
  )
}

function ClickCounter () {
  const [clicks, setClicks] = useState(0);
  const [fecha, setFecha] = useState(new Date());
  
  return (
    <div onClick={
      () => {
        setClicks(clicks +1)
        setFecha(new Date())
      }
    }>
      <h1>Contador de clicks</h1>
      <p>Clicks: {clicks} - Fecha: {fecha.getDate()}/{fecha.getMonth()+1}/{fecha.getFullYear()} {fecha.getHours()}:{fecha.getMinutes()}:{fecha.getSeconds()}</p>
    </div>
  );
}

function App() {
  return (
<<<<<<< HEAD
      <SuperForm title='Hey!'>
        <SuperButton/>
        <SuperState/>
        <StateHook/>
        <ClickCounter/>
      </SuperForm>
=======
    <div>
      <NavBar/>
    </div>
    
>>>>>>> d1-menu
  );
}

export default App;
