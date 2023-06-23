import React , {useEffect, useState} from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import SubmitMainDIv from './SubmitMainDIv'
import SubmitOtherDiv from './SubmitOtherDiv'
import {useSelector, useDispatch} from 'react-redux'
import { fetchClassStudents, fetchStaff, setFetching } from '../../redux/staffInformation'
import Loader from '../../Loader'
import axios from 'axios'


const StaffSubmit = () => {
  const dispatch = useDispatch()
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let classStudents = useSelector((state)=>state.staffInformation.classStudents)
  let fetching = useSelector((state)=>state.staffInformation.staffFetchingState)
  const fetchStaffInformation = ()=>{
    let allstaffsendpoint = 'http://localhost:7777/staff/allstaffs'
    if (Object.keys(staffInfo).length === 0 && staffInfo.constructor === Object) {
      let endpoint = 'http://localhost:7777/staff/dashboard'
      let token = localStorage.token
      axios.post(endpoint, {token})
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
    if (classStudents.length==0) {
      let classStudentsEndpoint = 'http://localhost:7777/staff/fetchclassstudents'
      dispatch(setFetching(true))
      axios.post(classStudentsEndpoint, {class: Number(localStorage.getItem('staffclass'))})
      .then((res)=>{
          if (res.status==200) {
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
      validateStaff()
  }, []);

  const [studentSubmit, setstudentSubmit] = useState({})
  const setViewingSubmit =(work)=>{
    setstudentSubmit(work)
    // console.log(work)
  }
  return (
    <>
        <div className=' StaffSubmit containerAll'>
            <DashboardNav/>
            {fetching && <Loader/>}
            {fetching==false && <>
              <SubmitMainDIv studentSubmit={studentSubmit} />
              <SubmitOtherDiv func={setViewingSubmit}/>
            </>}
        </div>
    </>
  )
}

export default StaffSubmit