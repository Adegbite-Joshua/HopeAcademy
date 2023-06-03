import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchClassStudents } from '../../redux/staffInformation'
import DashboardNav from '../StaffDashboard/DashboardNav'
import StudentMainDIv from './StudentMainDIv'
import StudentOtherDiv from './StudentOtherDiv'

const Student = () => {
  const [category, setcategory] = useState(null)
  const [mainindex, setmainindex] = useState(null)
  const [individualEmail, setemail] = useState(null)
  const dispatch = useDispatch()
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  const setViewingMessage =(cat, main, email)=>{
    // console.log(staffInfo.messages)
    console.log(cat, main, email);
    category!=''?setcategory(cat):''
    mainindex!=''?setmainindex(main):''
    individualEmail!=''?setemail(email):''
  }
  const decide = ()=>{
    let classStudents = 'http://localhost:7777/staff/fetchclassstudents'
    let staffClass = Number(localStorage.getItem('staffclass'))
    axios.post(classStudents, {class:staffClass})
    .then((res)=>{
        console.log(res)
        if (res.status==200) {
          dispatch(fetchClassStudents(res.data))
        } else if(res.status != 200){
            state.staffInformation = 'error'
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    
  }
  useEffect(() => {
      decide()
  }, []);
  return (
    <>
        <div className=' relative flex w-screen h-auto md:h-screen flex-col md:flex-row bg-slate-300 ring-0'>
            <DashboardNav/>
            <StudentMainDIv category={category} mainindex={mainindex} individualEmail={individualEmail}/>
            <StudentOtherDiv func={setViewingMessage}/>
        </div>
    </>
  )
}

export default Student