import React from 'react';
import './Teacher.css'
import { Col, Card} from 'react-bootstrap';

const Teacher = (props) => {
    const {name, img, profession, details} = props.teacher
    console.log(props)
    return (
        <div>
        {Array.from({ length: 1 }).map((_, idx) => (
<Col>
  <Card>
      <img src={img} alt="" />
    <Card.Body>
      <h3 className = 'text-center fw-bold'>{name}</h3>
      <h5 className = 'text-center profession'>{profession}</h5>
      <p className = 'text-center'>{details}</p>
      
      <Card.Text>
      </Card.Text>
      
    </Card.Body>
  </Card>
</Col>
))}
    </div>
    );
};

export default Teacher;