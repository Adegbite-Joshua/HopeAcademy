import React from 'react'
// import './App.css'
import './style.scss'
import './../node_modules/font-awesome/css/font-awesome.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPages/LandingPage';



function App() {

  return (
    <>      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/home" to="/"/>
          
          {/* <Route path='*' element={<ErrorPage/>}/> */}
        </Routes>
    </>
  )
}

export default App
