import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Link } from "react-router-dom";


const SignUpPage = () => {
  const subjects = [
    'MATHEMATICS',
    'ENGLISH LANGUAGE',
    'YORUBA',
    'CIVIC',
    'COMPUTER',
    'GEOGRAPHY',
    'ECONOMICS',
    'PHYSICS',
    'CHEMISTRY',
    'BIOLOGY',
    'ANIMAL',
    'FURTHER MATHS',
    'TECHNICAL'
  ]
  // const findIndex =(e)=>{
  //   console.log(subjects.indexOf(e.target.value))
  // }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phonenumber: '',
      email: '',
      password: '',
      staffIndex: -1,
      address: '',
      localGovernment: '',
      state: '',
      links: {
          facebook: '',
          twitter: '',
          whatsapp: '',
          other: ''
      },
      subjectInfo: {
          subjectName: '',
          subjectDescription: '',
          subjectPicUrl: ''
      },
      activeStatus: false,
      messages: [],
      submittedWorks: [],
      timelines: [],
      groups: [],
      files: []
    },
    onSubmit: (values)=>{
      console.log(values)
    }
  })
  return (
    <>
        <div className='w-full h-24 h-screen bg-slate-200 pt-24'>
            <form onSubmit={formik.handleSubmit} className="w-full md:w-6/12 px-5 h-auto block mx-auto">
                <label htmlFor="" className=''>First Name</label>
                <input type="text" name='firstName' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='First Name' />
                <label htmlFor="" className=''>Last Name</label>
                <input type="text" name='lastName' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Last Name' />
                <label htmlFor="" className=''>Email</label>
                <input type="text" name='email' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Email' />
                <label htmlFor="" className=''>Phone Number</label>
                <input type="text" name='phoneNumber' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Phone Number' />
                <label htmlFor="" className=''>Subject To Offer</label>
                <select  name="staffIndex" onChange={formik.handleChange} id="" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50 px-6'>
                  <option value={subjects.indexOf('MATHEMATICS')}>MATHEMATICS</option>
                  <option value={subjects.indexOf('ENGLISH LANGUAGE')}>ENGLISH LANGUAGE</option>
                  <option value={subjects.indexOf('YORUBA')}>YORUBA</option>
                  <option value={subjects.indexOf('CIVIC')}>CIVIC</option>
                  <option value={subjects.indexOf('COMPUTER')}>COMPUTER</option>
                  <option value={subjects.indexOf('GEOGRAPHY')}>GEOGRAPHY</option>
                  <option value={subjects.indexOf('ECONOMICS')}>ECONOMICS</option>
                  <option value={subjects.indexOf('PHYSICS')}>PHYSICS</option>
                  <option value={subjects.indexOf('CHEMISTRY')}>CHEMISTRY</option>
                  <option value={subjects.indexOf('BIOLOGY')}>BIOLOGY</option>
                  <option value={subjects.indexOf('ANIMAL')}>ANIMAL</option>
                  <option value={subjects.indexOf('FURTHER MATHS')}>FURTHER MATHS</option>
                  <option value={subjects.indexOf('TECHNICAL')}>TECHNICA</option>
                </select>
                <label htmlFor="">Address</label>
                <input type="text" name='address' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Address' />
                <label htmlFor="">Password</label>
                <input type="text" name='password' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Staff Password' />
                <input type="checkbox" className='accent-red-400' name="" id="" /><small>Agreed to <Link>Terms</Link> and <Link>Cond</Link></small>
                <button type='submit' className='block py-2 bg-orange-500 w-full rounded-full hover:bg-orange-300'>Sign Up</button>
            </form>      
        </div>
    </>
  )
}

export default SignUpPage