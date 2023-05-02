import React from 'react'
import StaffCalendar from './StaffCalendar'
import StaffInformation from './StaffInformation'
import StaffTimeline from './StaffTimeline'

const DashboardOtherSide = () => {
  return (
    <>
        <div className=" otherDiv basis-full md:basis-4/12 md:h-screen block bg-white overflow-y-auto mt-16 md:mt-0">
            <StaffInformation/>
            <hr className='my-2'/>
            <div className="flex w-full">
                <StaffCalendar/>
            </div>
            <StaffTimeline/>

        </div>
    </>
  )
}

export default DashboardOtherSide