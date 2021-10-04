import React from 'react';
import './Service.css'
import { Row, Col, Card } from 'react-bootstrap';

const Service = (props) => {
  console.log(props)
  const {addHandler} = props
    const {name, id , price, details, img} = props.services
    return (
        <div>
          <div>
            <img className = "img-fluid " src={img} alt="" />
          </div>
          <div>
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p>{details}</p>
            <button onClick = {() => addHandler(props.services)}>Purchase Now</button>
          </div>
        </div>
    );
};

export default Service;