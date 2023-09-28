import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/NavBar'
import Account from './Account'

const StudentAccount = () => {
    const [accountType, setaccountType] = useState('student');
    const [student, setstudent] = useState('')
    
    const searchStudent =(params)=>{
        if (params.trim().length>0) {
            const filtered = users.filter(user => user?.firstName?.includes(params) || user?.lastName?.includes(params) || user?.subject?.includes(params) || user?.email?.includes(params));
            setstudent(filtered);
          } else {
            setstudent(users)
          }
    }

    const users = [
        {
            firstName: 'Ade',
            lastName: 'kola',
            email: 'ade',
            _id: 'ruiinueimudsjrisrkujsdji',
            subject: 'Mathematics'
        },
        {
            firstName: 'Ade',
            lastName: 'Ade',
            email: 'ade',
            _id: 'ruiinueimudsjrisrkujsdji',
            subject: 'Mathematics'
        },
        {
            firstName: 'Ade',
            lastName: 'Ade',
            email: 'oooo',
            _id: 'ruiinueimudsjrisrkujsdji',
            subject: 'Mathematics'
        },
        {
            firstName: 'Ade',
            lastName: 'Ade',
            email: 'ade',
            _id: 'ruiinueimudsjrisrkujsdji',
            subject: 'Physics'
        }
        ]

    useEffect(() => {
      setstudent(users)
    }, [])
    
  return (
    <>
        <Navbar/>
        <div className=''>
            <div className='flex items-center flex-col'>
                <label htmlFor="selectClass">Select Class</label>
                <select name="" className=' w-40 h-12 bg-blue-100 border-0' id="">
                    <option value="">JSS 1</option>
                    <option value="">JSS 2</option>
                    <option value="">JSS 3</option>
                    <option value="">SSS 1</option>
                    <option value="">SSS 2</option>
                    <option value="">SSS 3  </option>
                </select>
                <p className='my-1'>Search for student by name, email</p>
                <input type="search" onKeyUp={(e)=>searchStudent(e.target.value)} className=' w-32 h-12 border-2 border-blue-400 rounded-lg focus:outline-0 p-2' />
            </div>
            <div className='w-full overflow-y-auto'>
                <table className='w-full overflow-y-auto'>
                    <caption className='my-2'>Student Accounts</caption>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Assigned Course</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {users.map((user)=>(
                            <Account name={user.firstName + ' ' + user.lastName} email={user.email} course={user.subject} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default StudentAccount