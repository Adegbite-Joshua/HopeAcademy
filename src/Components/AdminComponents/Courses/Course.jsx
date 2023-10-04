import React from 'react'
import axios from 'axios';


const Course = ({subjectName, teacherName, email, subjectImgae }) => {

  const deleteCourse =()=>{
    let endpoint = 'http://localhost:7777/admin/'
    let deleted = axios.post(endpoint, {})
  }

  return (
    <tr className='w-full border-2'>
        <td className=' border-2 px-2'><img src={subjectImgae} className='h-12 w-12 rounded-full' alt="" /></td>
        <td className=' border-2 px-2'>{subjectName}</td>
        <td className=' border-2 px-2'>{teacherName}</td>
        <td className=' border-2 px-2'>{email}</td>
        <td className='  px-2 flex gap-2 md:w-5 items-center'>
            {/* <button><i className='bg-blue-400 p-2 rounded-md fa fa-eye'></i></button> */}
            <button><i className='bg-green-400 p-2 rounded-md fa fa-edit'></i></button>
            <button onClick={()=>deleteCourse()}><i className='bg-red-400 p-2 rounded-md fa fa-trash'></i></button>
        </td>
    </tr>
  )
}

export default Course