import { useFormik } from 'formik';
import React from 'react'
import { Link } from "react-router-dom";
import { Value } from 'sass';



const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phonenumber: '',
      email: '',
      password: '',
      staffId: '',
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