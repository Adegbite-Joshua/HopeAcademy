import React, { useState } from 'react'
import { Link } from "react-router-dom";
import SignUpForm from './SignUpForm';


const SignUpPage = () => {
  
  return (
    <>
        <div className="flex bg-slate-200">
          <SignUpForm type='signup' />
          <div style={{backgroundImage: "url('/teachers/gallary6.jpg')"}} className="signupOtherDiv rounded-5">     
            <span className='px-3 py-2 rounded-full bg-blue-500 text-white'><Link to='/staff/signin'>Sign In</Link></span>
          </div>
        </div>
    </>
  )
}

export default SignUpPage