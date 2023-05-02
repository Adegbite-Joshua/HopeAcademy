import React from 'react'
import DashboardMainDiv from './DashboardMainDiv'
import DashboardNav from './DashboardNav'
import DashboardOtherSide from './DashboardOtherSide'

const StaffDashboard = () => {
  return (
    <>
        <div className="flex w-screen bg-slate-300">
            <DashboardNav/>
            <DashboardMainDiv/>
            <DashboardOtherSide/>
        </div>
    </>
  )
}

export default StaffDashboard