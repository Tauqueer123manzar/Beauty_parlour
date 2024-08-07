import './App.css'
import {Routes,Route } from 'react-router-dom'
import Header from './components/Header'
// import coverimage from '././assets/cover.jpg'
import Service from './components/Service'
import Home from './components/Home'
function App() {
  return (
    <>
     <Header/>
     <Home/>
     <Service/>
     <Routes>
       
     </Routes>
    </>
  )
}

export default App

