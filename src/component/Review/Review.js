import React from 'react';
import Cart from '../Cart/Cart';
import ReviewServices from '../ReviewService/ReviewServices';
import useCart from '../useCart/UseCart';
import useServices from '../UseServices/UseServices';

const Review = () => {
    const [services] = useServices()
    const [cart,setCart] = useCart(services) 
    return (
        <div className = 'service-container'>
            <div className = 'display-service'>
                {
                cart.map(service => <ReviewServices service = {service}></ReviewServices>)
            }
            </div>

            <div className="">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Review;