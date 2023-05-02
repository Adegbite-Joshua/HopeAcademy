import React from 'react'
import StaffGroup from './StaffGroup'
import SubmittedTest from './SubmittedTest'
import TopStudents from './TopStudents'

const DashboardMainDiv = () => {
  return (
    <>
        <div className='DashboardMainDiv h-screen basis-7/12 px-5 overflow-y-auto'>
            <h1 className='font-bold m-3 text-center'>Good morning, Monica</h1>
            <div className='w-100 h-32 bg-blue-700 rounded-3xl mx-5 flex justify-center items-center text-white'>
                <h3>Your students are doing great, <span className='font-semibold'>60%</span> has complete their test</h3>
            </div>
            <SubmittedTest/>
            <div className='w-full flex space-x-3'>
                <TopStudents/>
                <StaffGroup/>
            </div>
        </div>
    </>
  )
}

export default DashboardMainDiv