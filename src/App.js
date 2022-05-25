import './App.css';
import './components/NavBar.js';
import './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting='Catalogo de Mates' />
    </div>
  );
}

export default App;
