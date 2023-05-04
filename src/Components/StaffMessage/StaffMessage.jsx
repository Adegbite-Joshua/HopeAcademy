import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import MessageMainDiv from './MessageMainDiv'
import MessageOtherDiv from './MessageOtherDiv'

const StaffMessage = () => {
  return (
    <>
        <div className="StaffMessage flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav/>
            <MessageMainDiv/>
            <MessageOtherDiv/>
        </div>
    </>
  )
}

export default StaffMessage