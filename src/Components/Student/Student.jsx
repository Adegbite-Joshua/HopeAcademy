import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import StudentMainDIv from './StudentMainDIv'
import StudentOtherDiv from './StudentOtherDiv'

const Student = () => {
  return (
    <>
        <div className=' relative flex w-screen h-auto md:h-screen flex-col md:flex-row bg-slate-300 ring-0'>
            <DashboardNav/>
            <StudentMainDIv/>
            <StudentOtherDiv/>
        </div>
    </>
  )
}

export default Student