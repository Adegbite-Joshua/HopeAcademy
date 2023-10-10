import React, { useEffect, useState, useRef } from 'react'
import './style.scss'
import './../node_modules/font-awesome/css/font-awesome.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import EntranceTest from './Components/EntranceTest/EntranceTest';
import TestPage from './Components/EntranceTest/TestPage';
import TestInstructions from './Components/EntranceTest/TestInstructions';
import StaffForgottenPassword from '../pages/StaffForgottenPassword';
import StaffNotification from '../pages/StaffNotification';
import { useSelector, useDispatch } from 'react-redux';
import { updateStaffNotifications } from './redux/staffInformation';
import WebNotification from 'react-web-notifications';
import AdminSignUp from '../pages/AdminPages/AdminSignUp';
import AdminDashboard from '../pages/AdminPages/AdminDashboard';
import AdminSignIn from '../pages/AdminPages/AdminSignIn';
import NewCourse from '../pages/AdminPages/NewCourse';
import AdminEntranceTest from '../pages/AdminPages/EntranceTest';
import AllCourses from '../pages/AdminPages/AllCourses';
import NewAccount from './Components/AdminComponents/Accounts/NewAccount';
import EditAccount from './Components/AdminComponents/Accounts/EditAccount';
import StaffAccount from './Components/AdminComponents/Accounts/StaffAccount';
import StudentAccount from './Components/AdminComponents/Accounts/StudentAccount';
import NewAcademicTerm from './Components/AdminComponents/NewAcademicTerm/NewAcademicTerm';
import SalaryPayment from './Components/AdminComponents/SalaryPayment/SalaryPayment';
import StudentDashboard from '../pages/StudentPages/StudentDashboard';
import SignInPage from '../pages/StudentPages/SignInPage';



function App() {
  const socket = useSelector((state) => state.socketIO.socket);
  const dispatch = useDispatch();
  const [latestNotification, setlatestNotification] = useState({});
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

    const handleNotification = (notificationDetails) => {
      console.log(notificationDetails)
      dispatch(updateStaffNotifications(notificationDetails));
      setlatestNotification(notificationDetails);
      triggerNotification();
    };
    
    socket.on('getNotification', handleNotification);

    return () => {
      socket.off('getNotification');
    }; 
  }, [])

  const triggerNotification = () => {
    return (
      <WebNotification
          title= {latestNotification.type=='submit'?`You Have A New Submit From ${latestNotification.name}`: `You Have A New Message From ${latestNotification.name}`}
          icon="path/to/image.jpg"
          body={latestNotification.message}
          timeout={9000}
          onClick={() =>{
            const Tab = window.open('http://http://localhost:2000/', '_blank');
            if (Tab) {
              Tab.focus();
            }
          }}
        />
    )
  };
  return (
    <>      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/home" to="/"/>
          <Route path='/student/'>
            <Route path='dashboard' element={<StudentDashboard/>}/>
            <Route path='signin' element={<SignInPage/>}/>
            {/* <Route path='signup' element={<StaffSignUp/>}/>
            <Route path='inbox' element={<StaffMessage/>}/>
            <Route path='inbox/:id' element={<StaffMessage/>}/>
            <Route path='student' element={<Student/>}/>
            <Route path='student/:email' element={<Student/>}/>
            <Route path='submit' element={<StaffSubmit/>}/>
            <Route path='uploadfile' element={<StaffFile/>}/>
            <Route path='notifications' element={<StaffNotification/>}/>
            <Route path='setting' element={<StaffSetting/>}/>
            <Route path='class' element={<ScheduleClass/>}/>
            <Route path='forgottenpassword' element={<StaffForgottenPassword/>} />
            <Route path='forgottenpassword/:token' element={<StaffForgottenPassword/>} /> */}
          </Route>
          <Route path='/staff/'>
            <Route path='dashboard' element={<StaffDashboard/>}/>
            <Route path='signin' element={<StaffLogin/>}/>
            <Route path='signup' element={<StaffSignUp/>}/>
            <Route path='inbox' element={<StaffMessage/>}/>
            <Route path='inbox/:id' element={<StaffMessage/>}/>
            <Route path='student' element={<Student/>}/>
            <Route path='student/:email' element={<Student/>}/>
            <Route path='submit' element={<StaffSubmit/>}/>
            <Route path='uploadfile' element={<StaffFile/>}/>
            <Route path='notifications' element={<StaffNotification/>}/>
            <Route path='setting' element={<StaffSetting/>}/>
            <Route path='class' element={<ScheduleClass/>}/>
            <Route path='forgottenpassword' element={<StaffForgottenPassword/>} />
            <Route path='forgottenpassword/:token' element={<StaffForgottenPassword/>} />
          </Route>
          <Route path='/entrance_test/'>
            <Route path='instructions' element={<TestInstructions/>}/>
            <Route path='test' element={<TestPage/>}/>
            <Route path='' element={<EntranceTest/>}/>
          </Route>
          <Route path='/admin/'>
            <Route path='signin' element={<AdminSignIn/>} />
            <Route path='signup' element={<AdminSignUp/>} />
            <Route path='dashboard' element={<AdminDashboard/>} />
            <Route path='account/'>
              <Route path='' element={<NewAccount/>} />
              <Route path='new' element={<NewAccount/>} />
              <Route path='edit' element={<EditAccount/>} />
              <Route path='staff' element={<StaffAccount/>} />
              <Route path='student' element={<StudentAccount/>} />
            </Route>
            <Route path='course/'>
              <Route path='' element={<NewCourse/>} />
              <Route path='new' element={<NewCourse/>} />
              <Route path='all' element={<AllCourses/>} />
            </Route>
            <Route path='entrance_test' element={<AdminEntranceTest/>} />
            <Route path='new_term' element={<NewAcademicTerm/>} />
            <Route path='salary_payment' element={<SalaryPayment/>} />
          </Route>
        </Routes>
        <ToastContainer style={{zIndex: 99999999999999999999}} /> 
    </>
  )
}

export default App
