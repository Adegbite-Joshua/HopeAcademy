import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import checkStudentFeeStatus from '../../src/CustomHooks/StudentHooks/checkStudentFeeStatus'
import fetchStudentInfo from '../../src/CustomHooks/StudentHooks/fetchStudentInfo'
// import Loader from '../../Loader'
import NavBar from '../../src/Components/StudentComponents/NavBar'
import { fetchAllStaffs, fetchStudent, setFetched } from '../../src/redux/studentInformation'
// import './style.scss'
// import Loader from '../../src/Components/StudentComponents/Loader'
import ProfileMainDiv from '../../src/Components/StudentComponents/Profile/ProfileMainDiv'
import ProfileOtherDiv from '../../src/Components/StudentComponents/Profile/ProfileOtherDiv'


const StudentProfile = () => {
  document.querySelector('title').innerText = 'Profile | Student'; 
  const toggleSideNav =()=>{
        document.getElementById('SettingsOtherDiv').classList.toggle('SettingsOtherDiv2')
        console.log(document.getElementById('SettingsOtherDiv'));
    }
    const [displaying, setdisplaying] = useState('AllSettingsDiv')
    
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
    let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);

    useEffect(() => {
      validateStudent()
    }, [])
    const dispatch = useDispatch();
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
        <div className='flex allWrap h-screen'>
          <NavBar/>
          {/* {fetching && <Loader/>}
          {fetching==false && <> */}
            <ProfileMainDiv func={toggleSideNav} disp={displaying}/>
            {/* <ProfileOtherDiv func={toggleSideNav} func2={setSetting}/> */}
          {/* </>} */}
        </div>
    </>
  )
}

export default StudentProfile