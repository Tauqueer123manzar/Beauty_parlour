import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Service from './components/Service'
import Home from './components/Home'
import Appointment from './components/Appointment'
import Footer from './components/Footer'
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Service />
        <Appointment/>
        <Contact/>
        <Footer/>
      </Router>
    </>
  )
}

export default App

