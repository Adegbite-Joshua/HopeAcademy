import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'



const StudentClass = () => {
  return (
    <>
        <div className="flex w-screen flex-col md:flex-row bg-slate-300 relative ring-0">
            <DashboardNav/>
            {/* {fetching && <Loader/>} */}
        </div>
    </>
  )
}

export default StudentClass