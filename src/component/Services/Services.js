import React, { useEffect, useState } from 'react';
import "./Services.css"
import Service from '../Service/Service';
import useServices from '../UseServices/UseServices';
import useCart from '../useCart/UseCart'
import Cart from '../Cart/Cart';
import {addToLocal} from '../../LocalStorage/LocalStorage'
import { Button } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';



const Services = () => {
   const [services] = useServices()

   const [cart,setCart] = useCart(services) 

  const addHandler = (services) =>{
      const exists = cart.find(course => course.id === services.id)
      let newCart = [];
      if(exists){
        const rest = cart.filter(course => course.id !== services.id)
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, services] 

      }
      else{
        services.quantity = 1;
        newCart = [...cart, services]
      }
      setCart(newCart)
      addToLocal(services.id)
  }

    return (
    <div className = 'display-color'>
        <div className = "service-container pt-3 ps-4 pe-3 pb-4">
           
            <div className="display-service">
              
            {
                services.map(service => <Service 
                    key = {service.id}
                    addHandler = {addHandler}
                    services = {service}></Service>)
            }

            </div>
            
            <div>
                <Cart cart ={cart}>

                  <NavLink to ='/review'>
                    <Button variant="danger cart-btn">Order Now</Button>
                  </NavLink>
                </Cart>
            </div>
        </div>
    </div>
    );
};

export default Services;