import React,{useContext,useState} from 'react'
import {PersonalContext} from '../contexts/context';
import {BookingFormContext} from '../contexts/context';

const Finish = () => {

  const [reservationInfo] = useState(() => {
    const storedReservationInfo = localStorage.getItem('reservationInfo');
    if (storedReservationInfo) {
      const parsedInfo = JSON.parse(storedReservationInfo);
      // Parse the stored date back to a Date object
      parsedInfo.date = new Date(parsedInfo.date);
      return parsedInfo;
    } else {
      return {};
    }
  });
    console.log("reservation infos", reservationInfo );

// Destructure the reservation information
const { date, time, occasion, site, persons } = reservationInfo;

  //const {name}=useContext(PersonalContext);
  //const {date,time}= useContext(BookingFormContext);


    // Retrieve the stored personal information from localStorage
    const [personalInfo] = useState(() => {
      const storedPersonalInfo = localStorage.getItem('personalInfo');
      console.log("storedPersonalInfo", storedPersonalInfo); // Debug
      return storedPersonalInfo ? JSON.parse(storedPersonalInfo) : {};
    });
  // Destructure the personal information
  const { name,email,phone } = personalInfo;
  console.log("personal info", personalInfo );

  return (
    <div>
      <h1> Welcome to Little Lemon restaurant {name } </h1>
      <p>We are waiting for you on <span style={{ color: "#F4CE14" }}> {date?.toLocaleDateString() }</span>  At {time}</p>
      
      
      </div>
  )
}

export default Finish