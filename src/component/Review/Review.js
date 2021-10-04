import React from 'react';
import { removeFromData } from '../../LocalStorage/LocalStorage';
import Cart from '../Cart/Cart';
import ReviewServices from '../ReviewService/ReviewServices';
import useCart from '../useCart/UseCart';
import useServices from '../UseServices/UseServices';

const Review = () => {
    const [services] = useServices()
    const [cart,setCart] = useCart(services)
    
    const removeHandler = id=> {
        const newCart = cart.filter(service => service.id !== id)
        setCart(newCart)
        removeFromData(id)
    }
    return (
        <div className = 'service-container'>
            <div className = 'display-service'>
               
                {
                cart.map(service => <ReviewServices 
                    key = {service.id}
                    removeHandler ={removeHandler}
                    service = {service}></ReviewServices>)
                }
            </div>

            <div className="">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Review;