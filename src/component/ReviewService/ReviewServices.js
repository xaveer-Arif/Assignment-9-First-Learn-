import React from 'react';
import './ReviewService.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ReviewServices = (props) => {
    const {name, price, quantity, id} = props.service;
    const {removeHandler} = props
    return (
        <div className = ''>
            
            <div className = "review-bg text-white ps-3 pt-2 pb-2 pb-1">
                
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <h5>Quantity: {quantity}</h5>
            <Link to ='/review'>
            <Button variant="danger mt-1 ps-4 pe-4 fs-6" onClick = {() => removeHandler(id)}>Remove</Button></Link>
            </div>
            
        
        </div>
    );
};

export default ReviewServices;