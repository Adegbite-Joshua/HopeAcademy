import React, { useEffect, useState } from 'react'
import SignUpForm from '../../StaffSignUp/SignUpForm'
import Navbar from '../NavBar/NavBar'
import Account from './Account'

const StaffAccount = () => {
    const [accountType, setaccountType] = useState('student');
    const [staffs, setstaffs] = useState('')
    
    const searchStaff =(params)=>{
        if (params.trim().length>0) {
            const filtered = users.filter(user => user?.firstName?.includes(params) || user?.lastName?.includes(params) || user?.subject?.includes(params) || user?.email?.includes(params));
            setstaffs(filtered);
          } else {
            setstaffs(users)
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
      setstaffs(users)
    }, [])
    
  return (
    <>
        <Navbar/>
        <div className=''>
            <div className='flex items-center flex-col'>
                <p className='my-1'>Search for staff by name, email, course</p>
                <input type="search" onKeyUp={(e)=>searchStaff(e.target.value)} className=' w-32 h-12 border-2 border-blue-400 rounded-lg focus:outline-0 p-2' />
            </div>
            <div className='w-full overflow-y-auto'>
                <table className='w-full overflow-y-auto'>
                    <caption className='my-2'>Staff Accounts</caption>
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

export default StaffAccount