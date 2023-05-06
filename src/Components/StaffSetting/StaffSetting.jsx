import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import SettingMainDiv from './SettingMainDiv'
import SettingOtherDiv from './SettingOtherDiv'

const StaffSetting = () => {
  return (
    <>
        <div className='StaffSetting containerAll overflow-y-hidden'>
            <DashboardNav/>
            <SettingMainDiv/>
            <SettingOtherDiv/>
        </div>
    </>
  )
}

export default StaffSetting