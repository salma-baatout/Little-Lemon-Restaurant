import React from 'react'
import Iframe from 'react-iframe'

const MapAdress = () => {


  return (
    <div>
<h1 className='maptitle'>We are here !</h1>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.2170124969116!2d10.733481314769099!3d36.45231149490552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130299848bbe864b%3A0x7b847b3a98b26cc5!2sHALIFAX%20Formation%20de%20Nabeul%20(langues%20et%20management)!5e0!3m2!1sfr!2stn!4v1674852521539!5m2!1sfr!2stn" 
        
        
        className="mapstyle"
        
        ></Iframe>
    </div>
  )
}

export default MapAdress