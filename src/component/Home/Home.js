import React from 'react';
import './Home.css'
import { Button, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import HomeCart from '../HomeCart/HomeCart';
import useServices from '../UseServices/UseServices';
import { Link } from 'react-router-dom';

const Home = () => {
    // const [services] = useServices()
    const [courses , setCourses] = useState([])

    useEffect(() => {
        fetch('./shortData.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        // banner part
        <div>
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6 ">
            <h1 className="ms-5 display-5 fw-bold text-white">Money is a terrible master
             <b/> but an excellent servan</h1>
            <p className="text-white fs-4 ms-5 mt-4">
            <span> Be prepared to invest in a down market and to "get out" in a soaring market, as per the philosophy of Warren Buffett.</span></p>
            <Link to ='/services'>
            <Button variant="danger mt-3 ms-5 ps-4 pe-4 fs-6">Services</Button>
            </Link>
          </div>
          <div className="col-md-6"></div>

          {/* courses card */}
        </div>
        <div className = 'container mt-5 mb-5'>
        <Row xs={1} md={4} className="g-4 ">
            {
            courses.map(course => <HomeCart 
                key = {course.id}
                course = {course}></HomeCart>)
        }
        </Row>
        </div>
        </div>
        
           
            
           
        
    );
};

export default Home;