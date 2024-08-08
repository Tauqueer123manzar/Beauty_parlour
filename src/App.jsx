import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Service from './components/Service'
import Home from './components/Home'
import Appointment from './components/Appointment'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Service />
        <Routes>
          <Route path='/appointment' element={<Appointment />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

