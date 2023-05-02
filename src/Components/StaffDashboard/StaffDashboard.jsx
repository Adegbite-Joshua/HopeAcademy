import React from 'react'
import DashboardMainDiv from './DashboardMainDiv'
import DashboardNav from './DashboardNav'
import DashboardOtherSide from './DashboardOtherSide'

const StaffDashboard = () => {
  return (
    <>
        <div className="flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav/>
            <DashboardMainDiv/>
            <DashboardOtherSide/>
        </div>
    </>
  )
}

export default StaffDashboard