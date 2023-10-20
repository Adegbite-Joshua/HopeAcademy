import React from 'react'
import './style.scss'


const Result = ({ logoUrl, schoolName, address, contactNumber, studentName, matricNumber, className, results }) => {
  return (
    <div className='' style={{ textAlign: 'center'}}>
      <div className='flex gap-3'>
        <img className='basis-2/6' src={logoUrl} alt="School Logo" style={{ width: '100px', height: '100px' }} />
        <div className='basis-4/6 text-center'>
          <h2>{schoolName}</h2>
          <p>{address}</p>
          <p>Contact: {contactNumber}</p>
        </div>
      </div>
      <div style={{ margin: '20px auto' }}>
        <h3 className='border-2 border-gray-400'>Student Details</h3>
        <table className='w-full' style={{ margin: '0 auto' }}>
          <tbody>
            <tr>
              <td className='flex justify-center items-center'><img src={logoUrl} alt="Student" style={{ width: '80px', height: '80px' }} /></td>
              <td>
                <p className='text-left px-3'><strong>Name:</strong><span className='float-right'> {studentName}</span></p>
                <p className='text-left px-3'><strong>Matric Number:</strong><span className='float-right'> {matricNumber}</span></p>
                <p className='text-left px-3'><strong>Class:</strong><span className='float-right'> {className}</span></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>Results</h3>
        <table className='w-full' style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>CA</th>
              <th>Exam</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td name='result' >{result.subject}</td>
                <td name='result' >{result.ca}</td>
                <td name='result' >{result.exam}</td>
                <td name='result' >{result.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Result