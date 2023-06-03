import React from 'react'
import { useSelector } from 'react-redux'
import Student from './Student'

const SubmitOtherDiv = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  return (
    <>
        <div className='SubmitOtherDiv otherDiv'>
            <h3 className=' font-bold text-center'>Choose Student</h3>
            <div className=''>
                {staffInfo.submittedWorks?staffInfo.submittedWorks.map((work, index)=>(
                  <Student name='Working on it'/>
                )):<Student name='No Submit Work Yet'/>}
                <Student name='No Submit Work Yet'/>
            </div>
        </div>
    </>
  )
}

export default SubmitOtherDiv