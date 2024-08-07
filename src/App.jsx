import './App.css'
import {Routes,Route } from 'react-router-dom'
import Header from './components/Header'
// import coverimage from '././assets/cover.jpg'
import Home from './components/Home'
function App() {
  return (
    <>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App

