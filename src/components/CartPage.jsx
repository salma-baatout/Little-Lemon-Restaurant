import React,{ useState,useEffect }  from 'react'
import NavBar from './NavBar'
import Cart from "./Cart";



const CartPage = () => {

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
        <NavBar/>
        <Cart cart={cart} onRemoveItem={handleRemoveItem} onClearCart={handleClearCart}/>
    </div>
  )
}

export default CartPage