import React from 'react'
import { useSelector } from 'react-redux'
import StudentInfo from './StudentInfo'

const StudentOtherDiv = ({func}) => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let classStudents = useSelector((state)=>state.staffInformation.classStudents)
  return (
    <>
        <div className=' StudentOtherDiv basis-full md:basis-4/12 md:h-screen block bg-slate overflow-y-auto mt-16 md:mt-0 border border-2 p-2 relative'>
            <h3 className=' font-bold text-center sticky top-0'>Choose student to add </h3>
            {classStudents?classStudents.map((student, index)=>(
              <StudentInfo func={func} category='0' mainindex={staffInfo.class} email={student.email} name='Adegbite Joshua'/>
            )): <StudentInfo name='Fetching Students...'/>}
            <StudentInfo  name='Fetching Students...'/>
        </div>
    </>
  )
}

export default StudentOtherDiv