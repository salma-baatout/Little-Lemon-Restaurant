import React, { useState ,useEffect} from "react";
import {  Form } from "react-bootstrap";
import Cart from "./Cart";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { maincourse } from "./dishes";

const MainCourse = (props) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  //const [cart, setCart] = useState([]);
  const [sortOrder, setSortOrder] = useState("price");
 
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
    
  };

  const handleRemoveItem = (itemToRemove) => {
    const index = cart.findIndex((item) => item === itemToRemove);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  const handleClearCart = () => {
   setCart([]);
    localStorage.removeItem("cart");
 };

  
   const maincourse = props.data
      .sort((a, b) => {
        if (sortOrder === "calories") {
          return a.calories - b.calories;
        } else if (sortOrder === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return a.price - b.price;
        }
      })
      ;


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
    <div className="appetizer">
      <div>
        <h1 className="langueTitle">Main Course</h1>
      </div>

      <div className="line"></div>

      <div>
      <Form.Group controlId="sort-order">
            <Form.Label>Sort by:</Form.Label>
            <Form.Control
              as="select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="calories">Calories</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </Form.Control>
      </Form.Group>
      </div>


      
      
      <Carousel responsive={responsive}>
        {maincourse.map((item, index) => (
          <div className="carte" key={index}>
            <img src={item.image} className="cartepic" alt={item.name} />
            <h3 className="cartetitre">{item.name}</h3>
            <p className="cartecalories">{item.calories} Calories</p>
            <p className="carteprice">{item.price}  $ </p>
            <button className="btnAdd" disabled={item.disabled} onClick={() => addToCart(item)}>Order</button>

            
          </div>
        ))}
      </Carousel>

      
    </div>
  );
};

export default MainCourse;
