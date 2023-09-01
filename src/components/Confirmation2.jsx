import React,{useState,useEffect} from 'react'
import {PersonalContext} from '../contexts/context';
import NavBarSecond from './NavBarSecond';
import { Link} from "react-router-dom";
import "./styles/reserve.css";


const Confirmation2 = () => {

  const {name,setName,email,setEmail,phone,setPhone}=useContext(PersonalContext);

  useEffect(() => {
    // Store personal information in localStorage
    const personalInfo = {
      name, 
      email,
      phone,
     
    };

    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
  }, [name,email,phone]);

  console.log("personal info", personalInfo );


    // Retrieve the stored reservation information from localStorage
    const [reservationInfo] = useState(() => {
        const storedReservationInfo = localStorage.getItem('reservationInfo');
        return storedReservationInfo ? JSON.parse(storedReservationInfo) : {};
      });
    // Destructure the reservation information
    const { date, time, occasion, site, persons } = reservationInfo;


    const [cart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    });
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]); 


  return (
    <div>
<NavBarSecond cart={cart}/>
      
    <div className='container confirm'>
        <div className='row'>
            <div className='col-md-6'>
            <h2 className='confirmtitle'>Confirm your reservation to celebrate your  <span style={{ color: "#F4CE14" }}>{reservationInfo.occasion}</span> </h2>
            <p className='cartetitre'>On <span style={{ color: "#F4CE14" }}> {date?.toLocaleDateString() }</span></p>
            <p className='cartetitre'>At<span style={{ color: "#F4CE14" }}>{time }</span> </p>
            <p className='cartetitre'>An <span style={{ color: "#F4CE14" }}>{site}</span> table for  <span style={{ color: "#F4CE14" }}> {persons}</span> persons</p>
            </div>

            <div className='col-md-6'>
            <h2 className='confirmtitle'>Personal Information</h2>

        <PersonalContext.Provider value={{name,email,phone }}>
    <form >
      <label htmlFor="username">
        Name:
        <input className='input' type="text" id="username" required minLength="2" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input className='input' type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input className='input' type="tel"  value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      </form>
      </PersonalContext.Provider>

      
      <div className='bookButtons'>
      <Link to="/reservetable">
      <button type="submit" className='btnReserve'>Back</button>
      </Link>
      <Link to='/finish'>
      <button type="submit" className='btnReserve'>Confirm</button>
      </Link>
      </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Confirmation2

//pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"