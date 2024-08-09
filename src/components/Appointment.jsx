import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import '../App.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <section id="appointment" className='container' style={{ maxHeight: "100%", maxWidth: "100%" }}>
      <h2 className='text-center p-4' style={{ fontFamily: "initial", fontSize: "35px", fontWeight: "700" }}>Book an Appointment</h2>
      <Container className='p-2'>
        <Row>
          <Col sm={12} lg={5} md={6} className='position-relative ml-3'>
            <p className='text-white' style={{ fontSize: "30px", fontFamily: "initial"}}>HOW WE WORK</p>
            <p style={{ fontSize: "30px", fontFamily: "initial", fontWeight: "700px" }}>WORKING HOURS</p>
            <p style={{ fontFamily: "initial", fontSize: "20px" }}>We are open every day from the very morning. If you want to get any beauty services, please book your visit in advance.</p>
            <span className="text-white" style={{ display: "block", fontSize: "20px", fontFamily: "initial" }}>Monday to Friday:ㅤ08:00 - 22:00</span>
            <span className="text-white" style={{ display: "block", fontSize: "20px", fontFamily: "initial" }}>Saturday:ㅤ08:00 - 20:00</span>
            <span className="text-white" style={{ display: "block", fontSize: "20px", fontFamily: "initial" }}>Sunday:ㅤ08:00 - 20:00</span>
            <Button
              variant="dark"
              size="lg"
              onClick={handleChange}
              style={{ marginTop: "10px" }}>
              Book a visit
            </Button>
            <div className="vertical-line d-none d-md-block"></div>
          </Col>
          <Col sm={12} md={6} lg={6} style={{ marginLeft: "auto" }}>
            <p className='mt-3' style={{ fontSize: "25px", fontFamily: "initial", fontWeight: "650" }}>BOOKING FORM FOR APPOINTMENT</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='formName' className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formEmail' className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder='Enter your email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formPhone' className='mb-3'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your mobile number'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formDate' className='mb-3'>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type='date'
                  name='date'
                  value={formData.date}
                  onChange={handleChange}
                  isInvalid={!!errors.date}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formTime' className='mb-3'>
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type='time'
                  name='time'
                  value={formData.time}
                  onChange={handleChange}
                  isInvalid={!!errors.time}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.time}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formService'>
                <Form.Label>Service</Form.Label>
                <Form.Control
                  as="select"
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  isInvalid={!!errors.service}
                >
                  <option value="">Select a service</option>
                  <option value="Haircut">Haircut</option>
                  <option value="Hair Coloring">Hair Coloring</option>
                  <option value="Manicure">Manicure</option>
                  <option value="Pedicure">Pedicure</option>
                  <option value="Facial">Facial</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.service}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className='mt-4'>
                Book Appointment
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr style={{ border: "1px solid black", margin: "0" }} />
    </section>
  );
}

export default Appointment;
