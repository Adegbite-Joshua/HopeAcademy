import axios from 'axios'
import React , {useState, useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStaff } from '../../redux/staffInformation'
import DashboardNav from '../StaffDashboard/DashboardNav'
import SettingMainDiv from './SettingMainDiv'
import SettingOtherDiv from './SettingOtherDiv'


const StaffSetting = () => {
  const [displaying, setdisplaying] = useState('allSettings')
  const viewSetting=(response)=>{
    setdisplaying(response)
      // console.log(displaying))
  }
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
  window.decide = decide
  useEffect(() => {
    decide()
  }, [])
  return (
    <>
        <div className='StaffSetting containerAll overflow-y-hidden'>
            <DashboardNav/>
            <SettingMainDiv disp={displaying}/>
            <SettingOtherDiv func={viewSetting}/>
        </div>
    </>
  )
}

export default StaffSetting