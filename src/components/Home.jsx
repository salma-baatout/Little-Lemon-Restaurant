import React , { useState ,useEffect}from 'react'
import NavBar from './NavBar'
import Appetizers from './Appetizers'
import { appetizer, maincourse } from './dishes'
import  MainCourse from './MainCourse'
import Cart from './Cart'
import { Link } from "react-router-dom";




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
  }, [cart]);

  
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

 const addToCart = (item) => {
  const updatedCart = [...cart, item];
setCart(updatedCart);
localStorage.setItem("cart", JSON.stringify(updatedCart));
  
};

  return (
    <div>
    <div id="navbar">
        <NavBar/>
    </div>
    <div>
    <Appetizers data={appetizer}/>
   </div>
   <div>
    <MainCourse data={maincourse}/>
   </div>


   <div><Cart  cart={cart} onRemoveItem={handleRemoveItem} onClearCart={handleClearCart} onAddToCart={addToCart}/></div>
      
      
  <Link to="/CartPage">
  <button className="btnAdd">Cart ({cart.length})</button>
  </Link>

    </div>
  )
}

export default Home