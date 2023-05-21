import React , {useEffect, useState} from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import SubmitMainDIv from './SubmitMainDIv'
import SubmitOtherDiv from './SubmitOtherDiv'
import {useSelector, useDispatch} from 'react-redux'


const StaffSubmit = () => {
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
    if(staffInfo.length==0){
      decide()
    }
  }, []);
  return (
    <>
        <div className=' StaffSubmit containerAll'>
            <DashboardNav/>
            <SubmitMainDIv/>
            <SubmitOtherDiv/>
        </div>
    </>
  )
}

export default StaffSubmit