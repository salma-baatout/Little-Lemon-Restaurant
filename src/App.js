import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/CartPage';
import React, { useState,useEffect } from "react";

function App() {
 
 
  


  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/CartPage" element={<CartPage  />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
