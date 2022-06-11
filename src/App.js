import './App.css';
import './components/NavBar/NavBar.js';
import './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element ={<ItemListContainer greeting='Catalogo de Productos' />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
