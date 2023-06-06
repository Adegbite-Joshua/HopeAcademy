import React from 'react'
import { useSelector } from 'react-redux'
import Student from './Student'

const SubmitOtherDiv = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let classStudents = useSelector((state)=>state.staffInformation.classStudents)
  let studentsSubmit = [];
  staffInfo.submittedWorks.map((stud, ind)=>{
    let studentName = `${classStudents.find((student, index)=>student.email == stud.studentEmail).firstName} ${classStudents.find((student, index)=>student.email == stud.studentEmail).lastName}`
    studentsSubmit.push({
      studentName,
      ...stud
    })
  })
  console.log(studentsSubmit);
  return (
    <>
        <div className='SubmitOtherDiv otherDiv'>
            <h3 className=' font-bold text-center'>Choose Student</h3>
            <div className=''>
                {studentsSubmit.length>0?studentsSubmit.map((work, index)=>(
                  <Student name={work.studentName} fileDescription={work.fileDescription} />
                )):<Student name='No Submit Work Yet'/>}
                <Student name='No Submit Work Yet'/>
            </div>
        </div>
    </>
  )
}

export default SubmitOtherDiv