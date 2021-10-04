import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const HomeCart = (props) => {
    const {name, img, price} = props.course
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" className = 'images' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Price: ${price} 
          </Card.Text>
          <Button variant="danger mt-1 ps-4 pe-4 fs-6">Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
        </div>
    );
};

export default HomeCart;