import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import React, { useState,useEffect } from "react";

function App() {
 
 
  const handleRemoveItem = (itemToRemove) => {
    const index = cart.findIndex((item) => item === itemToRemove);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };


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
      <Route path="/Cart" element={<Cart cart={cart} onRemoveItem={handleRemoveItem} onClearCart={handleClearCart} />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
