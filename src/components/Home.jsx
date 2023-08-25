import React , { useState ,useEffect}from 'react'
import NavBar2 from './NavBar2'
import Appetizers from './Appetizers'
import { appetizer, dessert, maincourse } from './dishes'
import  MainCourse from './MainCourse'
import  Dessert from './Dessert'
import Cart from './Cart'
import Hero from './Hero'
import { Link } from "react-router-dom";
import Menu from './Menu'
import Footer2 from './Footer2'
import MapAdress from './MapAdress'





const Home = () => {

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
    useEffect(() => {
      
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);  
  
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
    
  };

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

 

  return (
    <div>
    <div id="navbar">
        <NavBar2 cart={cart} />
    </div>

    <div id="hero">
      <Hero/>
    </div>
    <div id="menu">
      <Menu data={appetizer} addToCart={addToCart}/>
    </div>

    <div id="appetizers">
      <Appetizers data={appetizer} addToCart={addToCart}/>
    </div>

    
    <div id="maincourse">
      <MainCourse data={maincourse} addToCart={addToCart}/>
    </div>

    
    <div id="dessert">
      <Dessert data={dessert} addToCart={addToCart}/>
    </div>
<div>
  <MapAdress/>
</div>
   
    <div id="footer">
      <Footer2/>
    </div>
{/*
    <div id="appetizer">
    <Appetizers data={appetizer} addToCart={addToCart}/>
   </div>
   <div id="main">
    <MainCourse data={maincourse} addToCart={addToCart}/>
   </div>
   <div id="dessert">
    <Dessert data={dessert} addToCart={addToCart}/>
   </div>



   <div><Cart  cart={cart} onRemoveItem={handleRemoveItem} onClearCart={handleClearCart} /></div>
      
      
  <Link to="/CartPage">
  <button className="btnAdd">Cart ({cart ? cart.length : 0})</button>
  </Link>


  */}



    </div>
  )
}

export default Home