import React from 'react'
import './App.css'
import './style.scss'
import './../node_modules/font-awesome/css/font-awesome.css'
import MessageSchool from "./Components/MessageSchool";
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <>      
        {/* <Routes>
          <Route path='/' element={<MessageSchool/>}/>
          <Route path="/home" to="/"/>
          
          <Route path='*' element={<ErrorPage/>}/>
        </Routes> */}
        <MessageSchool/>   
    </>
  )
}

export default App
