import React, { useEffect, useState } from 'react';
import "./Services.css"
import Service from '../Service/Service';
import useServices from '../UseServices/UseServices';
import Cart from '../Cart/Cart';

const Services = () => {
    // const [services] = useServices();
   const [services] = useServices()
  
    return (
    <div>
        <div className = "service-container">
           
            <div className="display-service">
            {
                services.map(service => <Service 
                    key = {service.id}
                    service = {service}></Service>)
            }
            </div>
            
            <div>
                <Cart></Cart>
            </div>
        </div>
    </div>
    );
};

export default Services;