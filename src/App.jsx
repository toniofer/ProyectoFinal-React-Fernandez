import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Page404 from './components/page404/Page404';
import Checkout from './components/checkout/checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer  />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
   
  )
}

export default App
