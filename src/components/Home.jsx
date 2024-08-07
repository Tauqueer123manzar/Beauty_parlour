import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Bookappointmentbutton from './Bookappointmentbutton';
import coverimage from '../assets/cover.jpeg';
import '../App.css'
const Home = ({ }) => {
  return (
    <>
      <div className='container' style={{maxWidth:"100%",maxHeight:"100%"}}>
      <h1 className='text-center p-4' style={{fontFamily:"initial"}}>LUXE AURA BEAUTY</h1>
        <Container fluid>
          <Row>
            <Col lg={5} md={6} sm={12} className='m-4 fs-5 p-4'>
              <p>At Glamour Haven, we believe that beauty is more than just skin deep –
                it’s about feeling confident and radiant from the inside out. Nestled in the heart of Hyderabad,
                our salon offers a serene and luxurious environment where you can unwind and indulge
                in a range of premium beauty services. Our mission is to provide you with an exceptional
                beauty experience, combining the latest trends and techniques with a personalized touch.
                Whether you're looking for a fresh new hairstyle, a rejuvenating facial,
                or a glamorous makeover, our team of skilled professionals is here to bring out the best in you.
              </p>
             <p style={{color:"white",fontsize:"22px",fontWeight:"700",marginTop:"28px"}}>BEAUTY PALOUR SALON</p>
             <h1 style={{fontSize:"40px",fontFamily:"fantasy"}}>ENHANCE YOUR BEAUTY AND UNQUIENESS</h1>
             <Bookappointmentbutton/>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <img src={coverimage} style={{maxHeight:"100%",maxWidth:"100%",marginTop:"35px",borderRadius:"4px"}}/>
            </Col>
          </Row>
          <hr style={{ border: "1px solid black", margin: "0" }} />
        </Container>
      </div>
    </>
  )
}

export default Home
