import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../useCart/UseCart';

const ReviewServices = (props) => {
    const {name, price, quantity} = props.service;
    return (
        <div>
        <h1>{name}</h1>
            <h4>Price: ${price}</h4>
            <h4>Quantity: {quantity}</h4>
        </div>
    );
};

export default ReviewServices;