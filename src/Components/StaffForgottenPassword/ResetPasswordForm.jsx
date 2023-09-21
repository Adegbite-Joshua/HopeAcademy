import React, { useState } from 'react';
import axios from 'axios'


const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [studentClass, setstudentClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7777/student/send_password_link', {email, studentClass})
    .then((res)=>{
      console.log(res)
      if(res.status==200){
        alert('Email sent')
        setEmail('')
        setstudentClass('')
      } else if(res.status==403){
        alert('Invalid Student Information')
      }
    })
    .catch((error)=>{
      console.log(error)
    })

};

  return (
    <form onSubmit={handleSubmit}>
        <p>Are you sure you want to proceed without entering your password? A reset email will be sent to your registered email address.</p>
      <div className="form-group">
        <label htmlFor="clas">Class</label>
        <select onChange={(e)=>setstudentClass(e.target.value)} required className='form-control my-2'>
          <option value={0} selected>JSS1</option>
          <option value={1}>JSS2</option>
          <option value={2}>JSS3</option>
          <option value={3}>SSS1</option>
          <option value={4}>SSS2</option>
          <option value={5}>SSS3</option>
        </select>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary my-2">
        Reset Password
      </button>
    </form>
  );
};

export default ResetPasswordForm;
