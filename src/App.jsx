import React, { useEffect } from 'react'
import './style.scss'
import './../node_modules/font-awesome/css/font-awesome.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPages/LandingPage';
import StaffLogin from './Components/StaffLogins/StaffLogin';
import StaffSignUp from './Components/StaffSignUp/StaffSignUp';
import StaffDashboard from './Components/StaffDashboard/StaffDashboard';
import Student from './Components/Student/Student';
import StaffMessage from './Components/StaffMessage/StaffMessage';
import StaffSubmit from './Components/StaffSubmit/StaffSubmit';
import StaffFile from './Components/StaffFile/StaffFile';
import StaffSetting from './Components/StaffSetting/StaffSetting';
import ScheduleClass from './Components/Class/StudentClass';



function App() {
  useEffect(()=>{
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
      })
    }
  }, [])
  return (
    <>      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/home" to="/"/>
          <Route path='/dashboard' element={<StaffDashboard/>}/>
          <Route path='/signin' element={<StaffLogin/>}/>
          <Route path='/signup' element={<StaffSignUp/>}/>
          <Route path='/inbox' element={<StaffMessage/>}/>
          <Route path='/inbox/:email' element={<StaffMessage/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/student/:email' element={<Student/>}/>
          <Route path='/submit' element={<StaffSubmit/>}/>
          <Route path='/uploadfile' element={<StaffFile/>}/>
          <Route path='/setting' element={<StaffSetting/>}/>
          <Route path='/class' element={<ScheduleClass/>}/>
          
        </Routes>
    </>
  )
}

export default App
