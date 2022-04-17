import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text> <strong>Price:</strong> {price}</Card.Text>
                    <Button onClick={() => navigateToCheckout(id)} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;