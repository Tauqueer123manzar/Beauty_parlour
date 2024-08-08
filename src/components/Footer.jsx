import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <Container style={{maxHeight:"100%",maxWidth:"100%"}}>
        <Row>
          <Col md={12} lg={12} sm={12} className='text-center p-3'>
            <p>&copy; {new Date().getFullYear()} Beauty Parlour. All rights reserved.</p>
          </Col>
        </Row>
        <Row>
        <Col md={6} sm={12} lg={12} className="text-center p-2 ">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaYoutube />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
