import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeCart = (props) => {
    const {name, img, price} = props.course
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
        </div>
    );
};

export default HomeCart;