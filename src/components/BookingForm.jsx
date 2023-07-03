import React, { useContext } from 'react'
import {useState} from 'react';
import BookingFormContext from '../contexts/context';
import { Link} from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function BookingForm() {
  const {date,setDate, time,setTime, persons,setPersons, occasion,setOccasion , site,setSite}=useContext(BookingFormContext);
  const [availableTimes] = useState(['8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM']);

  return (

    <div>
      <BookingFormContext.Provider value={{date,setDate, time,setTime, persons,setPersons, occasion,setOccasion , site,setSite }}>
  
    <form>
    <div className="form-group">
      <label className='label'>
        Date:</label>
        <DatePicker
        className='calendar'
          selected={date}
          onChange={(date) => setDate(date)}
        />

    </div>

      <div className="form-group">
      <label className='label'>
        Time:</label >
        <select className='input' value={time} onChange={e => setTime(e.target.value)}>
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
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="other">Other</option>
        </select>
        </div>


      <div className="form-group">
      <label className='label'>
        Indoor/Outdoor:</label>
        <select
        className='input'
          value={site}
          onChange={(e) => setSite(e.target.value)}>
          <option value="" disabled>Select a choice</option>
          <option value="birthday">Indoor Table</option>
          <option value="anniversary">Outdoor Table</option>
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
      <Link to='/personalinfo'>
      <button type="submit" className='btnReserve'>Reserve</button>
      </Link>
      </div>


    </div>

  );
}

export default BookingForm;






