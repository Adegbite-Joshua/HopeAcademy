import React , {useState, useEffect}from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import SettingMainDiv from './SettingMainDiv'
import SettingOtherDiv from './SettingOtherDiv'

const StaffSetting = () => {
  const [displaying, setdisplaying] = useState('allSettings')
  const viewSetting=(response)=>{
    setdisplaying(response)
      // console.log(displaying))
  }
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