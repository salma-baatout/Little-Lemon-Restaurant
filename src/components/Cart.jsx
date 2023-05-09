import React from 'react'

const Cart = ({ cart, onRemoveItem }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
 
  
  
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li className='list' key={index}>
            {item.name} - {item.price} $
            <button className='btnRemove' onClick={() => onRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total : {totalPrice} $</p>
    </div>
  );
};

export default Cart;
