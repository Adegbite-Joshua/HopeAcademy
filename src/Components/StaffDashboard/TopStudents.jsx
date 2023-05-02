import React from 'react'
import TopStudentView from './TOpStudentView'

const TopStudents = () => {
  return (
    <>
        <div className=' basis-full md:basis-2/6 flex flex-col p-3 space-y-2 bg-white rounded-md my-2'>
            <h3><span className="font-bold">Top Students</span> <span className=' float-right'>Class 6th</span></h3>
            <TopStudentView/>
            <TopStudentView/>
            <TopStudentView/>
        </div>
    </>
  )
}

export default TopStudents