import React, { useState } from 'react'
import Staffs from './Staffs'
import Students from './Students'

const OtherStudents = ({ func, func2 }) => {
    const [viewing, setviewing] = useState('students')
    return (
        <>
            <div id='OtherStudents' className=' showNone pt-24 md:p-2'>
                <label htmlFor="selectClass" className='text-center text-light font-bold p-2'>
                    Select a class to view students
                    <span id='toggleIco' onClick={func} className='float-right md:hidden border-2 p-2 rounded'>
                        <i className='fa fa-close'></i>
                    </span>
                </label>
                <div className='flex justify-center space-x-4'>
                    <button className='bg-blue-400 p-2 rounded-md' onClick={() => setviewing('students')}>Students</button>
                    <button className='bg-blue-400 p-2 rounded-md' onClick={() => setviewing('staffs')}>Staffs</button>
                    <button className='bg-blue-400 p-2 rounded-md'>Admin</button>
                </div>
                <div className='w-full OtherStudentsDiv py-3 px-2 h-80vh overflow-y-auto'>
                    {viewing === 'students' ? <Students func={func2} /> : ''}
                    {viewing === 'staffs' ? <Staffs func={func2} /> : ''}
                </div>
            </div>
        </>
    )
}

export default OtherStudents