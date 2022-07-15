import './App.css';
import './components/NavBar/NavBar.js';
import './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './context/CartContext'
import CartView from './components/Cart/CartVIew';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element ={<ItemListContainer greeting='Catalogo de Productos' />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartView/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
