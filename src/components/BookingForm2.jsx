import React, { useContext } from 'react'
import {useState,useEffect} from 'react';
import {BookingFormContext} from '../contexts/context';

import { Link} from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./styles/reserve.css";

function BookingForm2() {
  const {date,setDate,time,setTime, persons,setPersons, occasion,setOccasion , site,setSite}=useContext(BookingFormContext);

  const [availableTimes] = useState(['8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM']);

 
  useEffect(() => {
    // Store reservation information in localStorage
    const reservationInfo = {
      date : date.toISOString(), // Convert date to ISO string
      time,
      persons,
      occasion,
      site,
    };

    localStorage.setItem('reservationInfo', JSON.stringify(reservationInfo));
  }, [date, time, persons, occasion, site]);



  return (

    <div>
      
      <BookingFormContext.Provider value={{date,setDate, time,setTime, persons,setPersons, occasion,setOccasion , site,setSite }}>
  
    <form className='formstyle'>
    <div className="form-group">
      <label className='label'>
        Date:</label>
        <DatePicker
        className='calendar input'
          selected={date}
          onChange={(date) => setDate(date)}
        />

    </div>

      <div className="form-group">
      <label className='label'>
        Time:</label >
        <select className='input ' value={time} onChange={e => setTime(e.target.value)}>
          <option value="" disabled>Select a time</option>
          {availableTimes.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
      <label className='label'>
        Occasion:</label>
        <select
        className='input'
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}>
          <option value="" disabled>Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Party">Other</option>
        </select>
        </div>


      <div className="form-group">
      <label className='label'>
        Indoor/Outdoor:</label>
        <select
        
        className='input '
          value={site}
          onChange={(e) => setSite(e.target.value)}>
          <option value="" disabled>Select a choice</option>
          <option value="Indoor">Indoor Table</option>
          <option value="Outdoor">Outdoor Table</option>
        </select>

</div>

<div className="form-group">
      <label className='label' htmlFor="quantity">
        Number of persons:</label>
        <input
        id="quantity" name="quantity" min="1" max="20"
        className='input'
          type="number"
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
        />
      </div >
      </form>

      </BookingFormContext.Provider>

      <div className='bookButtons'>
      <Link to="/">
      <button type="submit" className='btnReserve'>Back</button>
      </Link>
      <Link to='/Confirmation2'>
      <button type="submit" className='btnReserve'>Reserve</button>
      </Link>
      </div>


    </div>

  );
}

export default BookingForm2;






