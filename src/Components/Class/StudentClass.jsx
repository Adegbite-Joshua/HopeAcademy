import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import ClassMainDiv from './ClassMainDiv'
import ClassOtherDiv from './ClassOtherDiv'



const StudentClass = () => {
  return (
    <>
        <div className="flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav/>
            {/* {fetching && <Loader/>} */}
            <ClassMainDiv />
            <ClassOtherDiv />

        </div>
    </>
  )
}

export default StudentClass