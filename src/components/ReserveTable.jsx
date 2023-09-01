import React,{ useState,useEffect } from 'react';
import NavBarSecond from './NavBarSecond';
import {Container,Row,Col} from 'react-bootstrap';
import BookingForm2 from './BookingForm2';
import "./styles/reserve.css";


const ReserveTable = () => {
  const [cart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); 

  return (
    <div className='app'>     
<NavBarSecond cart={cart}/>

<Container className='reserve'>
<Row className=''>
        <Col  sm={5}>
<h2>Experience the perfect balance of tradition and luxury.</h2>
<p className='text'>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
<p className='text'>Book a table with us to share in this experience.</p>
        </Col>


        <Col  sm={7}>
        
          <BookingForm2/>
          
        </Col>
      </Row>

</Container>

       


    </div>
  )
}

export default ReserveTable