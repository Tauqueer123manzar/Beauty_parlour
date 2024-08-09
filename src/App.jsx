import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Service from './components/Service'
import Home from './components/Home'
import Appointment from './components/Appointment'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Stylists from './components/Stylists';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Service />
        <Stylists/>
        <Appointment/>
        <Contact/>
        <Footer/>
      </Router>
    </>
  )
}

export default App

