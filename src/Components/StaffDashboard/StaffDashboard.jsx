import React from 'react'
import { useParams } from 'react-router-dom'
import DashboardMainDiv from './DashboardMainDiv'
import DashboardNav from './DashboardNav'
import DashboardOtherSide from './DashboardOtherSide'

const StaffDashboard = () => {
  let values = useParams()
  return (
    <>
        <div className="flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav/>
            <DashboardMainDiv name='' submittedTest={[]} topStudents={[]} groups={[]}/>
            <DashboardOtherSide/>
        </div>
    </>
  )
}

export default StaffDashboard