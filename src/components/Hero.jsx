import React from 'react'
import { Link } from "react-router-dom";
import "./styles/Hero.css";


const Hero = () => {
  return (
    
      

  <div className="hero-image">
    
  <div className="hero-text">  
  
  <p  >Indulge your senses in an unforgettable culinary journey, where exquisite flavors and impeccable service meet to create an extraordinary dining experience</p>
  <Link to="/reservetable" style={{ textDecoration: 'none'}}><button className='btnhero'>Book a Table</button></Link>
  </div>



  


</div>
  )
}

export default Hero