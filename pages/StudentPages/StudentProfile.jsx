import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import checkStudentFeeStatus from '../../CustomHooks/checkStudentFeeStatus'
import fetchStudentInfo from '../../CustomHooks/fetchStudentInfo'
// import Loader from '../../Loader'
import NavBar from '../../src/Components/StudentComponents/NavBar'
import { fetchStudent, setFetched } from '../../redux/studentInformation'
import StudentSideNav from '../StudentNav/StudentSideNav'
import './style.scss'
import Loader from '../../src/Components/StudentComponents/Loader'
import ProfileMainDiv from '../../src/Components/StudentComponents/Profile/ProfileMainDiv'


const StudentProfile = () => {
    document.querySelector("title").innerText = `Settings`
    const toggleSideNav =()=>{
        document.getElementById('SettingsOtherDiv').classList.toggle('SettingsOtherDiv2')
        console.log(document.getElementById('SettingsOtherDiv'));
    }
    const [displaying, setdisplaying] = useState('AllSettingsDiv')
    const setSetting =(setting)=>{
        setdisplaying(setting)
    }
    
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);

    useEffect(() => {
      // fetchStudentInformation()
      validateStudent()
    }, [])
    const dispatch = useDispatch()
    // const fetchStudentInformation =()=>{
    //   if(Object.keys(studentInfo).length === 0 && studentInfo.constructor === Object){
    //     dispatch(setFetched(true))
    //     let endpoint = 'http://localhost:7777/student/dashboard';
    //     let token = localStorage.getItem('token')
    //     axios.get(endpoint, {headers : {
    //       "Authorization": `Bearer ${token}`,
    //       "Content-Toe": "application/json",
    //       "Accept": "application/json"
    //     }})  
    //     .then((res)=>{
    //       if (res.status==200) {
    //         dispatch(fetchStudent(res.data))
    //         dispatch(setFetched(false))
    //       } else{
    //         console.log('error');
    //       }
    //     })
    //   }
    // }
    let [name] = fetchStudentInfo();
    const [paymentDisplayOption] = checkStudentFeeStatus();
    paymentDisplayOption=='indebt'?navigate('/feepayment'):'';

    const validateStudent =()=>{
      let token = localStorage.token
      let validateEndpoint = 'http://localhost:7777/student/validatedashboard'
      axios.get(validateEndpoint, {headers : {
        "Authorization": `Bearer ${token}`,
        "Content-Toe": "application/json",
        "Accept": "application/json"
      }})
      .then((res)=>{
        // console.log(res);
        if (res.status != 200) {
          navigate('/signin')
        } else{
          fetchStudentInformation()
        }
      })
      .catch((error)=>{
        navigate('/signin')
        console.log(error);
      })
    }
  return (
    <>
        <div className='flex'>
          <NavBar/>
          {fetching && <Loader/>}
          {fetching==false && <>
            <ProfileMainDiv func={toggleSideNav} disp={displaying}/>
            <ProfileOtherDiv func={toggleSideNav} func2={setSetting}/>
          </>}
        </div>
    </>
  )
}

export default StudentProfile