import React from 'react'
import Container from 'react-bootstrap/Container';;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from '../assets/logo1 (2).png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../App.css'
const  Header= () => {
  return (
       <Navbar expand="lg" className='p-2' style={{backgroundColor:"pink"}}>
      <Container fluid>
        <Navbar.Brand href="#">
        <Image src={logo} width={150} height={70} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-3 my-lg-0 navbar"
            style={{ maxHeight: '100%',fontSize:"18px",fontWeight:"600"}}
            navbarScroll
          >
            <Nav.Link href="#home" className="navbar-link">HOME</Nav.Link>
            <Nav.Link href="#service" className="navbar-link">SERVICES</Nav.Link>
            <Nav.Link href="#stylist" className="navbar-link">STYLIST PROFILES</Nav.Link>
            <Nav.Link as={NavLink} to="/appointment" className="navbar-link">APPOINTMENT</Nav.Link>
            <Nav.Link href="#contact" className="navbar-link">CONTACT</Nav.Link>
          </Nav>
          <ul style={{display:"flex"}}>
          <li style={{listStyle:"none",textDecoration:"none",fontSize:"35px",margin:"10px"}}>
            <a href='https://instagram.com' target='_blank'><FaInstagram /></a>
          </li>
          <li style={{listStyle:"none",textDecoration:"none",fontSize:"35px",margin:"10px"}}>
            <a href='https://facebook.com' target='_blank'><FaFacebook /></a>
          </li>
          <li style={{listStyle:"none",textDecoration:"none",fontSize:"35px",margin:"10px"}}>
            <a href='https://twitter.com' target='_blank'><FaTwitter /></a>
          </li>
          <li style={{listStyle:"none",textDecoration:"none",fontSize:"35px",margin:"10px"}}>
            <a href='https://youtube.com' target='_blank'><FaYoutube /></a>
          </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header

