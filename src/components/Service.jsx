import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import hairdesign from '../assets/hairdesign.jpg';
import haircolouring from '../assets/haircolourinf.jpg';
import makeup from '../assets/maakeup.jpg';
import manicure from '../assets/manicure.jpg';
import beauty from '../assets/beauty.jpg';
import '../App.css';

const serviceData = [
  {
    id: 1,
    title: "Hair Design",
    image: hairdesign
  },
  {
    id: 2,
    title: "Hair Colouring",
    image: haircolouring
  },
  {
    id: 3,
    title: "Makeup",
    image: makeup
  },
  {
    id: 4,
    title: "Manicure",
    image: manicure
  }
];

const Service = () => {
  return (
    <section id="service" className='container' style={{ maxHeight: "100%", maxWidth: "100%" }}>
      <Container fluid>
        <p className='text-center p-4' style={{ fontFamily: "initial", fontSize: "25px" }}>Services</p>
        <p className='text-white fs-1 text-center fw-1' style={{ fontFamily: "initial", fontWeight: "700" }}>WHAT WE OFFER</p>
        <p className='text-center p-2 fs-3' style={{ fontFamily: "initial" }}>From splendid makeups to gorgeous hairstyles — we've got you covered.</p>
        <Row className='mt-5 p-4'>
          {
            serviceData.map(service => (
              <Col sm={12} md={6} lg={3} key={service.id}>
                <Card className="bg-secondary card-hover" style={{ width: '20rem', height: "350px", margin: "7px", padding: "10px", marginLeft: "auto", marginRight: "auto" }}>
                  <Card.Img variant="top" src={service.image} style={{ height: '230px', objectFit: 'cover' }} />
                  <Card.Body className='text-center'>
                    <Card.Title className='text-light fs-3 m-4'>{service.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
        <Row className='mt-5 p-4'>
          <Col sm={12} md={6} lg={5}>
            <img src={beauty} alt="Beauty" style={{ maxHeight: "100%", maxWidth: "100%", borderRadius: "4px" }} />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className='text-center'>
              <h2 style={{ fontFamily: "initial", fontWeight: "700" }}>Experience the Best in Beauty</h2>
              <p className='fs-5' style={{ fontFamily: "initial" }}>
                At Luxe Aura Beauty, we provide a variety of top-notch services tailored to your unique needs. Our experienced professionals use the finest products and techniques to ensure you leave our salon feeling refreshed, confident, and beautiful.
              </p>
              <p className='fs-5' style={{ fontFamily: "initial" }}>
                Whether you're preparing for a special event or simply treating yourself to some well-deserved pampering, we are here to offer an exceptional experience. Book your appointment today and discover why Luxe Aura Beauty is the preferred choice for those seeking the ultimate in beauty care.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Service;