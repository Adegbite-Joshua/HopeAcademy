import React from 'react'
import ClassMainDiv from '../../src/Components/StaffComponents/Class/ClassMainDiv'
import ClassOtherDiv from '../../src/Components/StaffComponents/Class/ClassOtherDiv'
import DashboardNav from '../../src/Components/StaffComponents/StaffDashboard/DashboardNav'



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