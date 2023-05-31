import './App.css';
import FreeCodeCamp_Logo from './images/fcc_primary_large.jpg'

function App() {
  return (
    <div className="task-app">
      <div className='freecode_camp_logo_container'>
        <img
          src={FreeCodeCamp_Logo}
          className='freecode_camp_logo' />
      </div>
      <div className='main_task_list' >
        <h1>Mis Tareas</h1>
      </div>
    </div>
  );
}

export default App;
