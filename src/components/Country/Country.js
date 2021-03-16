import React from 'react';
import {Col, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Country = ({name, flag}) => {
    return (
        <Col md={3} className='my-3'>
            <Card>
                <div className='card-img'>
                    <Card.Img variant="top" src={flag} />
                </div>
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Button as={Link} to={`country/${name}`}>view details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Country;