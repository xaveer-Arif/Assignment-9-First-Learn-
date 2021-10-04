import React from 'react';
import { Button } from 'react-bootstrap';

const ReviewServices = (props) => {
    const {name, price, quantity, id} = props.service;
    const {removeHandler} = props
    return (
        <div className = ''>
            
            <div className = "bg-primary text-white ps-3 pb-1">
                <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <h5>Quantity: {quantity}</h5>

            <Button variant="danger " onClick = {() => removeHandler(id)}  >Remove</Button>
            </div>
            
        
        </div>
    );
};

export default ReviewServices;