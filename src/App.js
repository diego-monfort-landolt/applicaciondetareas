import logo from './logo.png';
import './App.css';
import Tarea from './components/Tarea';
import TareaFormulario from './components/TareaFormulario';
import ListaDeTareas from './components/ListadeTareas';

function App() {
  return (
    <div className='App'>
     <div className='logo-contenedor'>
      <img src={logo} className='diego-logo' />
      <h2>Learning React</h2>
     </div>
     <div className='tareas-lista-principal'>
      <h1>To do List</h1>

      <ListaDeTareas />  
     </div>
    </div>
  );
}

export default App;
