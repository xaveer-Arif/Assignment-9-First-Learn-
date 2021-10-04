import React from 'react';
import './Service.css'
import { Row, Col, Card, Button } from 'react-bootstrap';

const Service = (props) => {
  console.log(props)
  const {addHandler} = props
    const {name, id , price, details, img} = props.services
    return (
        <div className = 'card-color'>
          <div>
            <img className = "images " src={img} alt="" />
          </div>
          <div className = 'm-2'>
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p>{details}</p>
            {/* <button onClick = {() => addHandler(props.services)}>Purchase Now</button> */}

            <Button variant="danger mt-3 ps-4 pe-4 fs-5"  onClick = {() => addHandler(props.services)}>Purchase</Button>
          </div>
        </div>
    );
};

export default Service;