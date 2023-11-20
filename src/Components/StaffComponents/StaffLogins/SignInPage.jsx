import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import DisplayToast from '../../../CustomHooks/DisplayToast';




const SignInPage = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      class: 0,
      password: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      let endpoint = 'http://localhost:7777/staff/signin'
      axios.post(endpoint, values)
        .then((res) => {
          console.log('success');
          console.log(res);
          if (res.status == 200) {
            localStorage.setItem('staffToken', res.data.token)
            navigate("/staff/dashboard");
            DisplayToast('success', 'Successfully Signed In')
          }
        })
        .catch((err) => {
          if (err.response.status == 477) {
            DisplayToast('error', 'Invalid Login Email')
          } else if (err.response.status == 478) {
            DisplayToast('error', 'Wrong Password')
          } else {
            DisplayToast('error', 'An Error Occurred, Plases Try Again')
          }
        })
    }
  })

  return (
    <>
      <div className="flex h-screen">
        <div className='signinMainDiv bg-slate-200 pt-24 flex justify-center items-center '>
          <form onSubmit={formik.handleSubmit} className="h-auto mx-auto">
            <label htmlFor="" className=''>Email</label>
            <input onChange={formik.handleChange} type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-md  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Email' name='email' />
            <label htmlFor="">Class</label>
            <select name="class" id="class" required onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-md  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50'>
              <option value={0} selected>JSS 1</option>
              <option value={1}>JSS 2</option>
              <option value={2}>JSS 3</option>
              <option value={3}>SSS 1</option>
              <option value={4}>SSS 2</option>
              <option value={5}>SSS 3</option>
            </select>
            <label htmlFor="">Password</label>
            <input onChange={formik.handleChange} type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-md  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Staff Password' name='password' />
            <input type="checkbox" className='accent-red-400' name="" id="" /><small className='text-white'>Remenber me</small>
            <button type='submit' className='block py-2 bg-orange-500 w-full rounded-md hover:bg-orange-300'>Sign In</button>
            <p>New here? <Link to='/staff/signin' className='inline text-blue-500  hover:underline'>Sign Up</Link></p>
            <p>Forgotten Password? <Link to='/staff/forgottenpassword' className='inline text-red-500  hover:underline'>Reset</Link></p>
          </form>
        </div>
        <div style={{ backgroundImage: "url('/teachers/gallary6.jpg')" }} className='signinOtherDiv rounded-4'>
          <span className='px-3 py-2 rounded-pill bg-blue-500 text-white rounded-md'><Link to='/staff/signin'>Sign Up</Link></span>
        </div>
      </div>
    </>
  )
}

export default SignInPage