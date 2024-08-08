import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Beauty from '../assets/beauty-2.jpg'
import {Image} from 'react-bootstrap'
import '../App.css'
const Contact = () => {
  return (
    <>
    <section id="contact" className='container' style={{maxHeight:"100%",maxWidth:"100%"}}>
    <p className='text-center p-4 fs-3' style={{fontFamily:"initial"}}>contact us</p>
    <Container fluid>
      <Row>
        <Col sm={12} md={6} lg={5}>
          <Image style={{maxWidth:"100%",maxHeight:"100%"}}  src={Beauty}/>
        </Col>
        <Col sm={12} lg={6} md={6}>
         <p className='text-center p-1 mt-2 shadow' style={{fontFamily:"initial",fontSize:"45px"}}>GET IN TOUCH</p>
         <p className='p-1 fs-5' style={{fontFamily:"initial"}}>Please make sure to book your visit in advance as we have all artists fully booked as a rule. Contact us to make a reservation! </p>
         <span className='p-1 d-block fs-5' style={{fontFamily:"initial"}}>Phone Number: (+91)-7549200441</span>
         <span className='p-1 d-block fs-5' style={{fontFamily:"initial"}}>E-mail: mdtauqueermanzar@gmail.com</span>
         <span className='p-1 d-block fs-5' style={{fontFamily:"initial"}}>Location: 500032 GACHIBOWLI, 
         HYDERABAD INDIA</span>
         </Col>
      </Row>
      <Row>
        <Col sm={12} lg={12} md={6}>
         <p className='text-center text-white fs-1 shadow m-5' style={{fontFamily:"initial"}}>BOOK YOUR VISIT NOW!</p>
         <p className='text-center text-white fs-4 bg-dark m-5' style={{fontFamily:"initial"}}>Select the services you need and book your time slot online....</p>
        </Col>
      </Row>
    </Container>
    <hr style={{ border: "1px solid black", margin: "0" }} />
    </section>
    </>
  )
}

export default Contact