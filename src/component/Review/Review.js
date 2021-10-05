import React from 'react';
import './Review.css'
import { clearTheCart, removeFromData } from '../../LocalStorage/LocalStorage';
import Cart from '../Cart/Cart';
import ReviewServices from '../ReviewService/ReviewServices';
import useCart from '../useCart/UseCart';
import useServices from '../UseServices/UseServices';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Review = () => {
    const [services] = useServices()
    const [cart,setCart] = useCart(services)
    const history = useHistory()
    
    
    const removeHandler = id=> {
        const newCart = cart.filter(service => service.id !== id)
        setCart(newCart)
        removeFromData(id)
    }
     // clear data from review 
    const handleClear = () => {
       setCart([])
        clearTheCart()
    }

    return (
        <div className = 'service-container review-height display-color'>
            <div className = 'display-service reduce-margin pt-4 ps-5 pe-5'>
               
                {
                cart.map(service => <ReviewServices 
                    key = {service.id}
                    removeHandler ={removeHandler}
                    service = {service}></ReviewServices>)
                }
            </div>

            <div className ='pe-3'>
                <Cart cart={cart}>
                    <Button variant="danger cart-btn"
                    onClick ={handleClear}
                    >Buy Now</Button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;