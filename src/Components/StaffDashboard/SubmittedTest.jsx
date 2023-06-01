import React from 'react'
import { useSelector } from 'react-redux'
import TestOverView from './TestOverView'
import TestOverViewNone from './TestOverViewNone'

const SubmittedTest = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let fetchingData = useSelector((state)=>state.staffInformation.staffFetchingState)
  let SubmittedWork;
  if (!fetchingData) {
    SubmittedWork = staffInfo.submittedWorks.filter((submits, index)=>index<5)
  }

  return (
    <>
        <div className='w-full px-5 bg-white rounded-lg mt-5 py-5'>
            <h5>Submitted Tests</h5>
            <table className='w-full border-collapse border bottom-1 border-black'>
                <thead>
                    <tr className='text-center'>
                        <td  className='border-collapse border border-1 border-black'>Name</td>
                        <td  className='border-collapse border border-1 border-black'>Date Of Submission</td>
                        <td  className='border-collapse border border-1 border-black'>Status</td>
                        <td  className='border-collapse border border-1 border-black'>Download</td>
                        <td  className='border-collapse border border-1 border-black'>View Status</td>
                    </tr>
                </thead>
                <tbody>
                    {!fetchingData?SubmittedWork.lenght>0?SubmittedWork.map(()=>(<>
                    <TestOverView/>
                    <TestOverView/>
                    <TestOverView/>
                    <TestOverView/></>)): <TestOverViewNone/>:'' }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default SubmittedTest