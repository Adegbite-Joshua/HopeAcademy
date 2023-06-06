import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../Loader'
import { fetchStaff, fetchClassStudents, setFetching } from '../../redux/staffInformation'
import DashboardNav from '../StaffDashboard/DashboardNav'
import StudentMainDIv from './StudentMainDIv'
import StudentOtherDiv from './StudentOtherDiv'

const Student = () => {
  const [category, setcategory] = useState(null)
  const [mainindex, setmainindex] = useState(null)
  const [individualEmail, setemail] = useState(null)
  const [partnerName, setpartnerName] = useState('')
  const dispatch = useDispatch()
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let fetching = useSelector((state)=>state.staffInformation.staffFetchingState)
  let classStudents = useSelector((state)=>state.staffInformation.classStudents)
  const setViewingMessage =(cat, main, email)=>{
    // console.log(staffInfo.messages)
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
    if (Object.keys(staffInfo).length === 0 && staffInfo.constructor === Object) {
      axios.post(endpoint, details)
      .then((res)=>{
          console.log(res)
          if (res.status==200) {
            console.log('staffinfo');
            dispatch(fetchStaff(res.data))
            dispatch(setFetching(false))
          } else if(res.status != 200){
              state.staffInformation = 'error'
          }
      })
      .catch((err)=>{
          console.log(err);
      })
    }
      if (classStudents.length==0) {
        let classStudentsEndpoint = 'http://localhost:7777/staff/fetchclassstudents'
        dispatch(setFetching(true))
        // let potdetails = {class: Number(localStorage.getItem('staffclass'))}
        // console.log(potdetails);
        axios.post(classStudentsEndpoint, {class: Number(localStorage.getItem('staffclass'))})
        .then((res)=>{
            console.log(res)
            if (res.status==200) {
              console.log('classstudent');
              dispatch(fetchClassStudents(res.data))
              dispatch(setFetching(false))
            } else if(res.status != 200){
                state.staffInformation = 'error'
            }
        })
        .catch((err)=>{
            console.log(err);
        })
      }
  }
  useEffect(() => {
    fetchStaffInformation()
  }, [])
  const setPartnerName =(value)=>{
    setpartnerName(value);
  }
  return (
    <>
        <div className=' relative flex w-screen h-auto md:h-screen flex-col md:flex-row bg-slate-300 ring-0'>
            <DashboardNav/>
            {fetching && <Loader/>}
            {fetching==false && <>
              <StudentMainDIv category={category} mainindex={mainindex} individualEmail={individualEmail} partnerName={partnerName} />
              <StudentOtherDiv func={setViewingMessage} func2={setPartnerName}/>
            </>}
        </div>
    </>
  )
}

export default Student