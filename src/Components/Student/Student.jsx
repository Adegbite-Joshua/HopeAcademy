import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import StudentMainDIv from './StudentMainDIv'

const Student = () => {
  return (
    <>
        <div className='flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0'>
            <DashboardNav/>
            <StudentMainDIv/>
        </div>
    </>
  )
}

export default Student