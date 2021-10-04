import React from 'react';

const Cart = (props) => {
    const {cart} = props

    let quantity = 0;
    let total = 0;
    for (const service of cart){
        if(!service.quantity){
            service.quantity = 1
        }
        quantity = quantity + service.quantity;
        total = total + service.price * service.quantity
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items: {quantity}</h4>
            <h4>Total Price: {total}</h4>
        </div>
    );
};

export default Cart;