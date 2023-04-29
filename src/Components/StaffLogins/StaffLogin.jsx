import React from 'react'
import MessageSchool from '../MessageSchool'
import LandingPageNav from '../LandingPageNav'
import SignInPage from './SignInPage'

const StaffLogin = () => {
  return (
    <>
        <div className='w-100' style={{paddingTop: '100px'}}>
          <LandingPageNav/>
          <SignInPage/>
          <MessageSchool/>
        </div>
    </>
  )
}

export default StaffLogin