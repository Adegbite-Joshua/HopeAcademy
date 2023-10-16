import React, { useState } from 'react'
import Staffs from './Staffs'
import Students from './Students'

const OtherStudents = ({ func, func2 }) => {
    const [viewing, setviewing] = useState('students')
    return (
        <>
            <div id='OtherStudents' className='hidden topSpace'>
                <label htmlFor="selectClass" className='text-center text-light font-bold p-2'>
                    Select a class to view students
                    <span id='toggleIcon' onClick={func} className='float-right border border-2 p-2 rounded'>
                        <i className='fas fa-close'></i>
                    </span>
                </label>
                <div className='flex justify-center space-x-4'>
                    <button className='btn btn-info' onClick={() => setviewing('students')}>Students</button>
                    <button className='btn btn-info' onClick={() => setviewing('staffs')}>Staffs</button>
                    <button className='btn btn-info'>Admin</button>
                </div>
                <div className='w-full OtherStudentsDiv py-3 h-80vh overflow-y-auto'>
                    {viewing === 'students' ? <Students func={func2} /> : ''}
                    {viewing === 'staffs' ? <Staffs func={func2} /> : ''}
                </div>
            </div>
        </>
    )
}

export default OtherStudents