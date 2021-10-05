import React from 'react';
import './Service.css'
import { Button } from 'react-bootstrap';

const Service = (props) => {
  console.log(props)
  const {addHandler} = props
    const {name , price, details, img} = props.services
    return (
        <div className = 'card-color'>
          <div>
            <img className = "images " src={img} alt="" />
          </div>
          <div className = 'm-2'>
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p>{details}</p>
      
            <Button variant="danger mt-1 ps-4 pe-4 fs-6"  onClick = {() => addHandler(props.services)}>Purchase</Button>
          </div>
        </div>
    );
};

export default Service;