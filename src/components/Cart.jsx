import React from 'react'
import "./styles/Cart.css";

const Cart = ({ cart, onRemoveItem ,onClearCart }) => {
  

  //console.log("Cart:", cart); 
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  
   
  return (
    <div className="cart">
      <h2 className='cartTitle'>Orders</h2>
      <ul className='cartlist'>
        {cart.map((item, index) => (
          <li className='list' key={index}>
            {item.name} - {item.price} $
            <button className='btnAdd' onClick={() => onRemoveItem(item)}> Cancel </button>
          </li>
        ))}
      </ul>
      <p>Total : {totalPrice} $</p>
      <button onClick={() => onClearCart()} className="btnAdd">
            Clear Cart
          </button>
    </div>
  );
};

export default Cart;
