import React , {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DashboardMainDiv from './DashboardMainDiv'
import DashboardNav from './DashboardNav'
import DashboardOtherSide from './DashboardOtherSide'
import {useSelector, useDispatch} from 'react-redux'
import {fetchStaff} from '../../redux/staffInformation'



const StaffDashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [staffInfo, setstaffInfo] = useState([])
  useSelector((state)=>state.staffInformation.staffInformation)
  const decide = ()=>{
    dispatch(fetchStaff())
    console.log(staffInfo);
    if (staffInfo == 'error') {
      navigate('/signin')
    }
  }
  useEffect(() => {
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