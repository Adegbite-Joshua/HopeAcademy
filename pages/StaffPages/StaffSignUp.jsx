import React from 'react'
import SignUpPage from '../../src/Components/StaffComponents/StaffSignUp/SignUpPage';
import LandingPageNav from "../LandingPageNav";
import MessageSchool from '../MessageSchool';


const StaffSignUp = () => {
  return (
    <div className=''>
      <LandingPageNav/>
      <SignUpPage/>
      <MessageSchool/>
    </div>
  )
}

export default StaffSignUp