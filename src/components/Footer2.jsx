import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/Footer.css";



const Footer = () => {
  return (
    <div className="container footersection">
      <div className="row">
        <div className="col-md-4 footerDiv">
          <img className="footerlogo" src="/images/footer.png" alt="logo" />
        </div>
        {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
        <div className="col-md-4 footerDiv">
          <p className="rights">All Rights Reserved</p>
         
        </div>

        <div className="col-md-4 footerDiv FooterContact">
          <div className="contactDetails">
            <FontAwesomeIcon className="footerIcons" icon={faLocationDot} />
            02 rue Ibn Badis - 8000 - Nabeul Tunisie
          </div>
          <div className="contactDetails">
            <FontAwesomeIcon className="footerIcons" icon={faPhone} />
            (+216) 77-151-483
          </div>
          <div className="contactDetails">
            <FontAwesomeIcon className="footerIcons" icon={faEnvelope} />
            littlelemon@hotmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
