import './App.css';
import './components/NavBar/NavBar.js';
import './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useState, createContext } from 'react';
// import Counter from './components/Counter/Counter';
// import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';
import {CartProvider} from './context/CartContext'


function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <ScrollAnimation/> */}
      <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element ={<ItemListContainer greeting='Catalogo de Productos' />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<h1>Cart View</h1>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
