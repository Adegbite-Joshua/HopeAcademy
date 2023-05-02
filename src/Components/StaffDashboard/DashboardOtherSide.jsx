import React from 'react'
import StaffCalendar from './StaffCalendar'
import StaffInformation from './StaffInformation'

const DashboardOtherSide = () => {
  return (
    <>
        <div className="basis-4/12 h-screen border border-2 border-red-500">
            <StaffInformation/>
            <hr />
            <div className="flex">
                <StaffCalendar/>
            </div>

        </div>
    </>
  )
}

export default DashboardOtherSide