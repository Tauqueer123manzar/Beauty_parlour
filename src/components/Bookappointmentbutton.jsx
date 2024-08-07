import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Bookappointmentbutton = () => {
  const navigate= useNavigate();
  const handleClick=()=>{
    navigate("/appointment");
  }
  return (
    <Button 
    variant="dark" 
    onClick={handleClick} 
    size="lg" 
    className="book-appointment-btn" style={{marginTop:"45px"}}
  >
    Book Appointment
  </Button>
  )
}

export default Bookappointmentbutton
