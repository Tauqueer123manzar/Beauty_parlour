import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import stylistData from '../../styledata';
import '../App.css';

const Stylists = () => {
  return (
    <section id="stylist" className='container' style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <p className='text-center p-4 fs-2' style={{ fontFamily: "initial" }}>Gallery section</p>
      <Container fluid className='p-2'>
        <h1 className='mt-1 text-center' style={{ fontFamily:"revert-layer" }}>Choose Your Style</h1>
        <hr></hr>
        <Row className='style'>
          <div className='d-flex justify-content-around align-items-center' sm={12} md={4} lg={3}>
            <button className='btn btn-secondary m-2'>Hair Design</button>
            <button className='btn btn-secondary m-2'>Hair Colour</button>
            <button className='btn btn-secondary m-2'>Makeup</button>
            <button className='btn btn-secondary m-2'>All</button>
          </div>
        </Row>
        <Row className='mt-3 p-4'>
          {stylistData.map((style) => (
            <Col sm={12} lg={3} md={4} key={style.id}>
              <Card className='m-3' style={{ width: '18rem' ,height:"450px"}}>
                <Card.Img variant="top" src={style.image} />
                <Card.Body>
                  <Card.Title>{style.category}</Card.Title>
                  <Card.Text>{style.name}</Card.Text>
                  <Card.Text>{style.price}</Card.Text>
                  <Card.Text>
                    {style.description}
                  </Card.Text>
                  <Button variant="primary">Book Appointment</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <hr style={{ border: "1px solid black", margin: 0 }}></hr>
    </section>
  );
}

export default Stylists;
