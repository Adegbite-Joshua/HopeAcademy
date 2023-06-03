import React from 'react'
import Student from './Student'

const SubmitOtherDiv = () => {
  return (
    <>
        <div className='SubmitOtherDiv otherDiv'>
            <h3 className=' font-bold text-center'>Choose Student</h3>
            <div className=''>
                <Student/>
            </div>
        </div>
    </>
  )
}

export default SubmitOtherDiv