import React from 'react'
import TestOverView from './TestOverView'

const SubmittedTest = () => {
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
                    <TestOverView/>
                    <TestOverView/>
                    <TestOverView/>
                    <TestOverView/>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default SubmittedTest