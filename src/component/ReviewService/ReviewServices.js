import React from 'react';

const ReviewServices = (props) => {
    const {name, price, quantity, id} = props.service;
    const {removeHandler} = props
    return (
        <div>
        <h1>{name}</h1>
            <h4>Price: ${price}</h4>
            <h4>Quantity: {quantity}</h4>
            <button onClick = {() => removeHandler(id)}>Remove</button>
        </div>
    );
};

export default ReviewServices;