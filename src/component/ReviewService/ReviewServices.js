import React from 'react';

const ReviewServices = (props) => {
    const {name, price, quantity, id} = props.service;
    const {removeHandler} = props
    return (
        <div className = ''>
            
            <div className = "bg-primary">
                <h4>{name}</h4>
            <h4>Price: ${price}</h4>
            <h4>Quantity: {quantity}</h4>
            <button onClick = {() => removeHandler(id)}>Remove</button>
            </div>
            
        
        </div>
    );
};

export default ReviewServices;