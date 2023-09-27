import React from 'react'

const Account = ({name, course, email, }) => {
  return (
        <tr className='w-full border-2'>
            <td className=' border-2 px-2'>{name}</td>
            <td className=' border-2 px-2'>{email}</td>
            <td className=' border-2 px-2'>{course}</td>
            <td className=' border-2 px-2 flex gap-2 md:w-5 items-center'>
                <button><i className='bg-blue-400 p-2 rounded-md fa fa-eye'></i></button>
                <button><i className='bg-green-400 p-2 rounded-md fa fa-edit'></i></button>
                <button><i className='bg-red-400 p-2 rounded-md fa fa-trash'></i></button>
            </td>
        </tr>
  )
}

export default Account