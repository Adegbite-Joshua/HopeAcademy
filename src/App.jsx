import React from 'react'
// import './style.css'
import './style.scss'
import './../node_modules/font-awesome/css/font-awesome.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPages/LandingPage';
import StaffLogin from './Components/StaffLogins/StaffLogin';
import StaffSignUp from './Components/StaffSignUp/StaffSignUp';



function App() {

  return (
    <>      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/home" to="/"/>
          <Route path='/signin' element={<StaffLogin/>}/>
          <Route path='/signup' element={<StaffSignUp/>}/>
          
          
        </Routes>
    </>
  )
}

export default App
