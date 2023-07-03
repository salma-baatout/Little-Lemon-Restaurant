import React,{ useState,useEffect } from 'react';
//import Bookingform from './Bookingform'
import NavBar from './NavBar';
import  BookingForm  from './BookingForm';
import { Link} from "react-router-dom";
import "./styles/reserve.css";

const Reserve = () => {
   
  const [cart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); 


  console.log("Cart:", cart); 
  return (
  
<div>

    <NavBar cart={cart}/>

    <div className='container reserve'>

<div className='row'>
<div className='col-md-6' >
<div className="text">
<h2>Experience the perfect balance of tradition and luxury.</h2>
<p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
<p>Book a table with us to share in this experience.</p>
</div>
</div>

<div className='col-md-6' >
<BookingForm/>
</div>
</div>



    </div>
    
</div>
   


)
}

export default Reserve

