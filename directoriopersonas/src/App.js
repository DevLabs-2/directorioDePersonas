import logo from './logo.svg';
import './App.css';
import ListaPersonas from './components/ListaPersonas';


function App() {
  return (
    <div className="App">
      <ListaPersonas pag={8}></ListaPersonas>
    </div>
  );
}

export default App;
