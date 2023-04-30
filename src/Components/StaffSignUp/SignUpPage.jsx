import React from 'react'
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <>
        <div className='w-full h-24 h-screen bg-slate-200 pt-24'>
            <div className="w-full md:w-6/12 px-5 h-auto block mx-auto">
                <label htmlFor="" className=''>First Name</label>
                <input type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='First Name' name='' />
                <label htmlFor="" className=''>Last Name</label>
                <input type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Last Name' name='' />
                <label htmlFor="" className=''>Email</label>
                <input type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Email' name='' />
                <label htmlFor="" className=''>Phone Number</label>
                <input type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Phone Number' name='' />
                <label htmlFor="">Address</label>
                <input type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Address' name='' />
                <label htmlFor="">Password</label>
                <input type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Staff Password' name='' />
                <input type="checkbox" className='accent-red-400' name="" id="" /><small>Agreed to <Link>Terms</Link> and <Link>Cond</Link></small>
                <button className='block py-2 bg-orange-500 w-full rounded-full hover:bg-orange-300'>Sign In</button>
            </div>

            
        </div>
    </>
  )
}

export default SignUpPage