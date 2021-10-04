import React from 'react';
import './Home.css'
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
            
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6 ">
            <h1 className="ms-5 display-5 fw-bold text-white">Money is a terrible master
             <b/> but an excellent servan</h1>
            <p className="text-white fs-4 ms-5 mt-4">
            <span> Be prepared to invest in a down market and to "get out" in a soaring market, as per the philosophy of Warren Buffett.</span></p>
            <button className="mt-3 ms-5">About Us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
            
    );
};

export default Home;