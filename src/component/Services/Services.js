import React, { useEffect, useState } from 'react';
import "./Services.css"
import Service from '../Service/Service';
import useServices from '../UseServices/UseServices';
import useCart from '../useCart/UseCart'
import Cart from '../Cart/Cart';
import {addToLocal, getStoredCart} from '../../LocalStorage/LocalStorage'


const Services = () => {
    // const [services] = useServices();
   const [services] = useServices()

   const [cart,setCart] = useCart(services) 

//    useEffect(() => {
//        if(services.length){
//         const saveCart = getStoredCart();
//         const storeCart = []
//         for(const id in saveCart){
//             const addedService = services.find(service => service.id === id)
//             if(addedService){
//                 const quantity = saveCart[id]
//                 addedService.quantity = quantity;
//                 storeCart.push(addedService)
//             }
            
//         }
//         setCart(storeCart)
//        }
       
       
//    },[services])

  const addHandler = (services) =>{
    // const newCart = [...cart, services]
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
    <div>
        <div className = "service-container">
           
            <div className="display-service">
            {
                services.map(service => <Service 
                    key = {service.id}
                    addHandler = {addHandler}
                    services = {service}></Service>)
            }
            </div>
            
            <div>
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    </div>
    );
};

export default Services;