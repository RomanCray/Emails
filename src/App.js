import logo from './logo.svg';
import './App.css';
import { AlertaMixin, AlertaNomr, AlertaUser } from './Components/Js/RMC_Alertas';

function App() {

  // const nombre = <AlertaUser />;
  // console.log(<AlertaUser />);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AlertaMixin
          nombreIcono='info'
          Texto='hola'
          colorIcono = ''
          colorFondo = ''
          colorLetra = ''
          />
        <AlertaMixin
          nombreIcono='warning'
          Texto='hola Pol'
          colorBoton='baq' />
        <AlertaMixin
          nombreIcono='success'
          Texto='hola Pol'
          colorBoton='green' />
        <AlertaNomr
          nameicono='error' />
        <AlertaUser />
      </header>
    </div>
  );
}

export default App;
