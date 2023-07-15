import React from 'react'
import DashboardNav from '../StaffDashboard/DashboardNav'
import ClassMainDiv from './ClassMainDiv'



const JoinedStudent = () => {
  return (
    <>
       <div className='w-44 h-full relative border-2 border-green-300 shrink-0'>
            <video src='vid.mp4' muted autoPlay controls loop className='w-full h-full'></video>
            <p className='absolute top-0 bg-white w-full text-center'>Adegbite Joshua</p>
       </div>
    </>
  )
}

export default JoinedStudent