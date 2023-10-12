import React from 'react';
import ResetPasswordForm from '../../src/Components/StaffComponents/StaffForgottenPassword/ResetPasswordForm';


const SendPasswordLink = () => {
  return (
    <>
        <div className="">
        <h2 className='text-center underline text-3xl'>Staff Forgot Password</h2>
        {/* <p>Enter your email address to reset your password.</p> */}
        <ResetPasswordForm />
        </div>
    </>
  )
}

export default SendPasswordLink