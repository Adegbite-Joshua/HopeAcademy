import React , {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DashboardMainDiv from './DashboardMainDiv'
import DashboardNav from './DashboardNav'
import DashboardOtherSide from './DashboardOtherSide'
import {useSelector, useDispatch} from 'react-redux'
import {fetchStaff, setFetching} from '../../redux/staffInformation'
import axios from 'axios'
import Loader from '../../Loader'
// import {Redirect} from 'react-router-dom'



const StaffDashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let fetching = useSelector((state)=>state.staffInformation.staffFetchingState)
  
  const fetchStaffInformation = ()=>{
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
  }
  useEffect(() => {
    fetchStaffInformation()
  }, [])
  

  const validateStudent =()=>{
    let token = localStorage.token
    let validateEndpoint = 'http://localhost:7777/staff/validatedashboard'
    axios.get(validateEndpoint, {headers : {
      "Authorization": `Bearer ${token}`,
      "Content-Toe": "application/json",
      "Accept": "application/json"
    }})
    .then((res)=>{
      console.log(res);
      if (res.status != 200) {
        navigate('/signin')
      }
    })
    .catch((error)=>{
      navigate('/signin')
      console.log(error);
    })
  }

  let values = useParams()
  return (
    <>
        <div className="flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav/>
            {fetching && <Loader/>}
            {!fetching && <>
              <DashboardMainDiv name='' submittedTest={[]} topStudents={[]} groups={[]}/>
              <DashboardOtherSide/>
            </>}
        </div>
    </>
  )
}

export default StaffDashboard