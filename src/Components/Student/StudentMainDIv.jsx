import React from 'react'
import MessageStudent from './MessageStudent'
import StudentLastPerformance from './StudentLastPerformance'
import StudentScoreTable from './StudentScoreTable'

const StudentMainDIv = () => {
  return (
    <>
        <div className='StudentMainDIv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto border border-2 relative'>
            <h3 className=' text-center'>Adegbite Joshua</h3>
            <div className="w-full overflow-x-scroll">
                <StudentScoreTable/>
            </div>
            <StudentLastPerformance/>
            <MessageStudent/>
        </div>
    </>
  )
}

export default StudentMainDIv