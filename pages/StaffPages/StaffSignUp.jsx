import React from 'react'
import LandingPageNav from '../../src/Components/LandingPageNav';
import SignUpPage from '../../src/Components/StaffComponents/StaffSignUp/SignUpPage';
import MessageSchool from '../../src/Components/MessageSchool';


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