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
        <div className = " ms-4 mt-5">
            <div className ="card">
            <h2 className = 'fw-bold ms-3'>Order Summary</h2>
            <h5 className ="ms-3">Items: {quantity}</h5>
            <h5 className = 'ms-3'>Total Price: {total}</h5>
            {props.children}
            </div>
        </div>
    );
};

export default Cart;