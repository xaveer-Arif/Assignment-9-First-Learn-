import React from 'react';
import './Service.css'
import { Row, Col, Card } from 'react-bootstrap';

const Service = (props) => {
    const {name, id , price, details, img} = props.service
    return (
        <div>
          <div>
            <img className = "img-fluid " src={img} alt="" />
          </div>
          <div>
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <p>{details}</p>
            <button>Purchase Now</button>
          </div>
        </div>
    );
};

export default Service;