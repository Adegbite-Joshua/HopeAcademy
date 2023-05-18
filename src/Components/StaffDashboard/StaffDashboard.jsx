import React , {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DashboardMainDiv from './DashboardMainDiv'
import DashboardNav from './DashboardNav'
import DashboardOtherSide from './DashboardOtherSide'
import {useSelector, useDispatch} from 'react-redux'
import {fetchStaff} from '../../redux/staffInformation'
import axios from 'axios'



const StaffDashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  
  const decide = ()=>{
    
    let endpoint = 'http://localhost:7777/staff/dashboard'
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
                  // console.log(staffInfo);
                    // Object.assign(state.staffInformation=res.data)
                    // state.staffInformation = res.data
                } else if(res.status != 200){
                    state.staffInformation = 'error'
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    // console.log(staffInfo);
    // if (staffInfo == 'error') {
    //   navigate('/signin')
    // }
  }
  useEffect(() => {
    // setTimeout(()=>decide, 10);
    decide()
  }, [])
  
  let values = useParams()
  return (
    <>
        <div className="flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav/>
            <DashboardMainDiv name='' submittedTest={[]} topStudents={[]} groups={[]}/>
            <DashboardOtherSide/>
        </div>
    </>
  )
}

export default StaffDashboard