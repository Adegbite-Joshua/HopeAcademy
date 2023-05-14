import React from 'react'
import { Formik, useFormik } from 'formik'


const SignInPage = () => {
  const formik  = useFormik({
    initialValues: {
      email: '',
      staffId: '',
      password: ''
    },
    onSubmit: (values)=>{
      console.log(values);
    }
  })
  return (
    <>
        <div className='w-full h-24 h-screen bg-slate-200 pt-24'>
            <form onSubmit={formik.handleSubmit} className="w-6/12 h-auto block mx-auto">
                <label htmlFor="" className=''>Email</label>
                <input onChange={formik.handleChange} type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Email' name='email' />
                <label htmlFor="">Id Number</label>
                <input onChange={formik.handleChange} type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Staff Id' name='staffId' />
                <label htmlFor="">Password</label>
                <input onChange={formik.handleChange} type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Staff Password' name='password' />
                <input type="checkbox" className='accent-red-400' name="" id="" /><small>Remenber me</small>
                <button type='submit' className='block py-2 bg-orange-500 w-full rounded-full hover:bg-orange-300'>Sign In</button>
            </form>            
        </div>
    </>
  )
}

export default SignInPage