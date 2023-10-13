import React from 'react'
import ClassMainDiv from '../../src/Components/StaffComponents/Class/ClassMainDiv'
import ClassOtherDiv from '../../src/Components/StaffComponents/Class/ClassOtherDiv'
import DashboardNav from '../../src/Components/StaffComponents/StaffDashboard/DashboardNav'
import fetchStaffInfo from '../../src/CustomHooks/StaffHooks/fetchStaffInfo'



const StudentClass = () => {
  // const [staffInfo, fetching, staffNotifications, notificationFetchingState] = fetchStaffInfo();
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