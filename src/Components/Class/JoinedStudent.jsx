import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import ClassMainDiv from './ClassMainDiv'



const JoinedStudent = () => {
  return (
    <>
       <div className='w-44 h-full relative border-2 border-green-300'>
            <video src='vid.mp4' muted autoPlay controls loop className='w-full h-full'></video>
            <p className='absolute top-0'>Adegbite Joshua</p>
       </div>
    </>
  )
}

export default JoinedStudent