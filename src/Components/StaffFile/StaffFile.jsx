import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import FileMainDashboard from './FileMainDashboard'
import FileOtherDiv from './FileOtherDiv'

const StaffFile = () => {
  return (
    <>
        <div className='StaffFile containerAll'>
            <DashboardNav/>
            <FileMainDashboard/>
            <FileOtherDiv/>
        </div>
    </>
  )
}

export default StaffFile