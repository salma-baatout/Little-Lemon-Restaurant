import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/CartPage';
import React from "react";

function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/CartPage" element={<CartPage />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
