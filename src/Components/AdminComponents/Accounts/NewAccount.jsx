import React, { useState } from 'react'
import SignUpForm from '../../StaffSignUp/SignUpForm'
import Navbar from '../NavBar/NavBar'

const NewAccount = () => {
    const [accountType, setaccountType] = useState('student')
    const chooseAccountType =(type)=>{
        setaccountType(type)
    }
  return (
    <>
        <Navbar/>
        <div className=' grid grid-cols-1 md:flex'>
            <div className=' order-3 md:order-none basis-full md:basis-4/6'>
                <SignUpForm type='create' />
            </div>
            <div className=' order-1 md:order-none basis-full md:basis-2/6'>
                <p className='text-center my-2'>Create account for:</p>
                <div className='flex gap-3'>
                    <button className=' p-2 rounded-lg mx-auto bg-blue-500' onClick={()=>chooseAccountType('student')}>Student</button>
                    <button className=' p-2 rounded-lg mx-auto bg-blue-500' onClick={()=>chooseAccountType('staff')}>Staff</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewAccount