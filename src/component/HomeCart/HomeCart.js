import React from 'react';
import { Card, Col } from 'react-bootstrap';

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
        </Card.Body>
      </Card>
    </Col>
  ))}
        </div>
    );
};

export default HomeCart;