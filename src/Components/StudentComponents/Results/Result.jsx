import React from 'react'
import './style.scss'


const Result = ({ logoUrl, schoolName, address, contactNumber, studentName, rollNumber, className, results }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <img src={logoUrl} alt="School Logo" style={{ width: '100px', height: '100px' }} />
        <h2>{schoolName}</h2>
        <p>{address}</p>
        <p>Contact: {contactNumber}</p>
      </div>
      <div style={{ margin: '20px auto' }}>
        <h3>Student Details</h3>
        <table className='w-full' style={{ margin: '0 auto' }}>
          <tbody>
            <tr>
              <td><img src={logoUrl} alt="Student" style={{ width: '80px', height: '80px' }} /></td>
              <td>
                <p><strong>Name:</strong> {studentName}</p>
                <p><strong>Roll Number:</strong> {rollNumber}</p>
                <p><strong>Class:</strong> {className}</p>
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
              <th>CA Score</th>
              <th>Exam Score</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.subject}</td>
                <td>{result.ca}</td>
                <td>{result.exam}</td>
                <td>{result.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Result