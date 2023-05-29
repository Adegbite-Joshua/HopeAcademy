import React from 'react'
import StudentInfo from './StudentInfo'

const StudentOtherDiv = ({func}) => {
  return (
    <>
        <div className=' StudentOtherDiv basis-full md:basis-4/12 md:h-screen block bg-slate overflow-y-auto mt-16 md:mt-0 border border-2 p-2 relative'>
            <h3 className=' font-bold text-center sticky top-0'>Choose student to add </h3>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
            <StudentInfo/>
        </div>
    </>
  )
}

export default StudentOtherDiv