import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import MessageMainDiv from './MessageMainDiv'
import MessageOtherDiv from './MessageOtherDiv'
import { fetchStaff, fetchAllStaffs, fetchAllStudents } from '../../redux/staffInformation'
import { useSelector, useDispatch } from 'react-redux'


const StaffMessage = () => {
  const dispatch = useDispatch()
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  const decide = ()=>{
    let endpoint = 'http://localhost:7777/staff/dashboard'
    let allstaffsendpoint = 'http://localhost:7777/staff/allstaffs'
    let allstudentsendpoint = 'http://localhost:7777/staff/allstudents'
    let staffEmail = localStorage.getItem('staffemail')
    let staffPassword = localStorage.getItem('staffpassword')
    let staffClass = localStorage.getItem('staffclass')
    let details = {
        staffClass,
        staffEmail,
        staffPassword
    }
    axios.post(endpoint, details)
    .then((res)=>{
        console.log(res)
        if (res.status==200) {
          dispatch(fetchStaff(res.data))
        } else if(res.status != 200){
            state.staffInformation = 'error'
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    axios.get(allstaffsendpoint, details)
    .then((res)=>{
        console.log(res)
        if (res.status==200) {
          dispatch(fetchAllStaffs(res.data))
        } else if(res.status != 200){
            state.staffInformation = 'error'
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    axios.get(allstudentsendpoint, details)
    .then((res)=>{
        console.log(res)
        if (res.status==200) {
          dispatch(fetchAllStudents(res.data))
        } else if(res.status != 200){
            state.staffInformation = 'error'
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    
  }
  useEffect(() => {
    // if(staffInfo.length==0){
      decide()
    // }
  }, []);
  window.decide = decide
  const [category, setcategory] = useState(null)
  const [mainindex, setmainindex] = useState(null)
  const [individualIndex, setindividualIndex] = useState(null)
  const setViewingMessage =(cat, main, ind)=>{
    // console.log(staffInfo.messages)
    // console.log(cat, main, ind);
    category!=''?setcategory(cat):''
    mainindex!=''?setmainindex(main):''
    individualIndex!=''?setindividualIndex(ind):''
  }
  return (
    <>
        <div className="StaffMessage flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav/>
            <MessageMainDiv mainindex={mainindex} category={category} individualIndex={individualIndex} />
            <MessageOtherDiv func={setViewingMessage} func2={decide}/>
        </div>
    </>
  )
}

export default StaffMessage