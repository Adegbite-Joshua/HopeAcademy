import React, { useState } from 'react'
import OnlinePeople from './OnlinePeople'
import {useSelector} from 'react-redux'


const Students = ({func}) => {
    let allStudents = useSelector((state)=>state.studentInformation.allStudents);    
    const [viewing, setviewing] = useState(0)
  return (
    <>
        <select name="" id="selectClass" onChange={(e)=>setviewing(e.target.value)} className='h-12 w-full border-2 rounded-md'>
                <option value="0">JSS 1 </option>
                <option value="1">JSS 2</option>
                <option value="2">JSS 3</option>
                <option value="3">SSS 1</option>
                <option value="4">SSS 2</option>
                <option value="5">SSS 3</option>
            </select>
        {allStudents[viewing]?allStudents[viewing].map((student, index) =>(
            <OnlinePeople func={func} id={student._id} name={`${student.firstName} ${student.lastName}`}/>
        )): ''}
    </>
  )
}

export default Students