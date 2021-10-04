import React from 'react';
import './Review.css'
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
        <div className = 'service-container extra-height display-color'>
            <div className = 'display-service pt-1 ps-5 pe-5'>
               
                {
                cart.map(service => <ReviewServices 
                    key = {service.id}
                    removeHandler ={removeHandler}
                    service = {service}></ReviewServices>)
                }
            </div>

            <div className ='pe-3'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Review;