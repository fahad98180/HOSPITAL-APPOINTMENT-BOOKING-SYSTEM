import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
// import './index.css'
// import './global.css'
import Doctor from './pages/Doctor'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
// import { MyProfile } from './pages/MyProfile'
import MyOppoinment from './pages/MyOppoinment'
import Appointment from './pages/Appointment'
import Navbar from './component/Navbar'
import Login from './pages/Login'
import About from './pages/About'
import Footer from './component/Footer'

function App() {
  return (

<div className='mx-4 sm:mx-[10%]'>
  <Navbar />
<Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/Doctor'element={<Doctor/>}/>
  <Route path='/Doctor/:speciality'element={<Doctor/>}/>
  <Route path='/login'element={<Login/>}/>
  <Route path='/about'element={<About/>}/>
  <Route path='/contact'element={<Contact/>}/>
  <Route path='/MyProfile'element={<MyProfile/>}/>
  <Route path='/MyOppoinment'element={<MyOppoinment/>}/>
  <Route path='/Appointment/:docId'element={<Appointment/>}/>




</Routes>
<Footer/>
</div> )
}

export default App