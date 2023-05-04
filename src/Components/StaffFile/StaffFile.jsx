import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import FileMainDashboard from './FileMainDashboard'

const StaffFile = () => {
  return (
    <>
        <div className='StaffFile containerAll'>
            <DashboardNav/>
            <FileMainDashboard/>
        </div>
    </>
  )
}

export default StaffFile