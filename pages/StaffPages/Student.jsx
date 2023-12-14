import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { fetchStaff, fetchClassStudents, setFetching } from '../../redux/staffInformation'
import DashboardNav from '../../src/Components/StaffComponents/StaffDashboard/DashboardNav'
import StudentMainDIv from '../../src/Components/StaffComponents/Student/StudentMainDIv'
import StudentOtherDiv from '../../src/Components/StaffComponents/Student/StudentOtherDiv'
import { useParams } from 'react-router-dom'
import Loader from '../../src/Loader'
import fetchStaffInfo from '../../src/CustomHooks/StaffHooks/fetchStaffInfo'
import fetchSubjectStudents from '../../src/CustomHooks/StaffHooks/fetchSubjectStudents'



const Student = () => {
  const [staffInfo, fetching, staffNotifications, notificationFetchingState] = fetchStaffInfo();
  const [category, setcategory] = useState(null)
  const [mainindex, setmainindex] = useState(null)
  const [individualEmail, setemail] = useState(null)
  const [partnerName, setpartnerName] = useState('')
  const dispatch = useDispatch()
  let paramsValue = useParams();
  const [classStudents] = fetchSubjectStudents();
  // let classStudents = useSelector((state)=>state.staffInformation.classStudents)
  const setViewingMessage =(cat, main, email)=>{
    console.log(cat, main, email);
    category!=''?setcategory(cat):''
    mainindex!=''?setmainindex(main):''
    individualEmail!=''?setemail(email):''
  }
  
  const fetchStaffInformation = async()=>{
    console.log(classStudents);
    let endpoint = 'http://localhost:7777/staff/dashboard'
    let staffEmail = localStorage.getItem('staffemail')
    let staffPassword = localStorage.getItem('staffpassword')
    let staffClass = Number(localStorage.getItem('staffclass'))
    let details = {
        staffClass,
        staffEmail,
        staffPassword
    }
    // try{
    //   if (Object.keys(staffInfo).length === 0 && staffInfo.constructor === Object) {
    //     axios.post(endpoint, details)
    //     .then((res)=>{
    //         if (res.status==200) {
    //           dispatch(fetchStaff(res.data))
    //           dispatch(setFetching(false))
    //           setDefault()
    //         } else if(res.status != 200){
    //             state.staffInformation = 'error'
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    //   }
    // } catch (error){
    //   console.log(error)
    // }
    
  }
  const validateStaff =()=>{
    let token = localStorage.token
    let validateEndpoint = 'http://localhost:7777/staff/validatetoken'
    axios.get(validateEndpoint, {headers : {
      "Authorization": `Bearer ${token}`,
      "Content-Toe": "application/json",
      "Accept": "application/json"
    }})
    .then((res)=>{
      console.log(res);
      if (res.status == 200) {
        fetchStaffInformation()
      } else{
        navigate('/signin')
      }
    })
    .catch((error)=>{
      navigate('/signin')
      console.log(error);
    })
  }
  useEffect(() => {
    // validateStaff()
    // console.log({class: Number(localStorage.getItem('staffclass')), subjectIndex: staffInfo.subjectIndex})
    setDefault()
    // if (classStudents.length==0 && Object.keys(staffInfo).length >= 1 && staffInfo.constructor === Object) {
      
    // }
  }, [staffInfo])
  const setPartnerName =(value)=>{
    setpartnerName(value);
  }

  const setDefault=()=>{
    if(paramsValue.email && Object.keys(staffInfo).length > 0 && staffInfo.constructor === Object){
      setcategory(0);
      setmainindex(staffInfo.class);
      setemail(paramsValue.email);
      console.log(classStudents.find((student, index)=>student.email==paramsValue.email).firstName)
      setpartnerName(classStudents.find((student, index)=>student.email==paramsValue.email).firstName)
    }
  }
  return (
    <>
        <div className=' relative flex w-screen h-screen flex-col md:flex-row bg-slate-300 ring-0'>
            <DashboardNav/>
            {fetching && <Loader/>}
            {fetching==false && <>
              <StudentMainDIv category={category} mainindex={mainindex} individualEmail={individualEmail} classStudents={classStudents} partnerName={partnerName} />
              <StudentOtherDiv func={setViewingMessage} func2={setPartnerName}/>
            </>}
        </div>
    </>
  )
}

export default Student