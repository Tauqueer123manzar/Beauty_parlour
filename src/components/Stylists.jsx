import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import stylistData from '../../styledata';
import '../App.css';

const Stylists = () => {
  const [items, setItems] = useState(stylistData);

  const filterItem = (categItem) => {
    const updatedItems = stylistData.filter((currElem) => {
      return currElem.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <section id="stylist" className="container" style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <p className="text-center p-4 fs-2" style={{ fontFamily: "initial" }}>Gallery section</p>
      <Container fluid className="p-2">
        <h1 className="mt-1 text-center" style={{ fontFamily: "revert-layer" }}>Choose Your Style</h1>
        <hr />
        <Row className="d-flex justify-content-center mb-4">
          <Button variant="secondary" className="m-2" onClick={() => filterItem('Hair Design')}>Hair Design</Button>
          <Button variant="secondary" className="m-2" onClick={() => filterItem('Hair Colour')}>Hair Colour</Button>
          <Button variant="secondary" className="m-2" onClick={() => filterItem('Makeup')}>Makeup</Button>
          <Button variant="secondary" className="m-2" onClick={() => setItems(stylistData)}>All</Button>
        </Row>
        <Row className="mt-3 p-4">
          {
            items.map((style) => (
            <Col sm={12} md={4} lg={3} key={style.id}>
              <Card className="m-3 card-hover" style={{ maxWidth: "100%", height: "460px" }}>
                <Card.Img variant="top" src={style.image} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title className="fs-4" style={{ fontFamily: 'initial' }}>{style.category}</Card.Title>
                  <Card.Text className="fs-5" style={{ fontFamily: 'initial' }}>{style.name}</Card.Text>
                  <Card.Text className="fs-5" style={{ fontFamily: 'initial' }}>{style.price}</Card.Text>
                  <Card.Text className="fs-5" style={{ fontFamily: 'initial' }}>
                    {style.description}
                  </Card.Text>
                  <Button variant="primary">Book Appointment</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <hr style={{ border: "1px solid black", margin: 0 }} />
    </section>
  );
};

export default Stylists;
