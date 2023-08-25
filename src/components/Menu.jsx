import React, { useState } from "react";
import {  Form } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import {appetizer} from "./dishes"
import "./styles/Menu.css";
import {Container,Row,Col} from "react-bootstrap"

const Menu = (props) => {

  const handleAddToCart = (item) => {
    props.addToCart(item);
  };
    const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="menu">
        <Container fluid>
          <Row>
          <Col md={1} className="smenutitle" >
            <h1 className="specialstitle">This week's specials ! </h1>
            
          </Col>
          <Col md={11}>
        <Carousel responsive={responsive}>
        {appetizer.map((item, index) => (
          <div className="cartemenu" key={index}>
            <img src={item.image} className="cartepic" alt={item.name} onClick={() => handleAddToCart(item)}/>
            <h3 className="cartemenutitre">{item.name}</h3>
            <p className="cartecal">{item.calories} Calories</p>
            <p className="menuprice">{item.price}  $ </p>
            <button className="btnMenu" disabled={item.disabled} onClick={() => handleAddToCart(item)}>Order</button>

            
          </div>
        ))}


      </Carousel>
      </Col>
      </Row>
      </Container>


      
      

    </div>
  );
};

export default Menu;

      
