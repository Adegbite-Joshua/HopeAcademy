import React from 'react'

const ProfiileUpdate = () => {
  return (
    <>
        <div className="ProfiileUpdate">
            <h3>Edit Your Profile</h3>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='First Name' id='firstName' />
            <label htmlFor='firstName'>Last Name</label>
            <input type='text' className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='First Name' id='firstName' />
            <label htmlFor='firstName'>Email</label>
            <input type='text' className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Email' id='firstName' />
            <label htmlFor='firstName'>Phone Number</label>
            <input type='text' className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Phone Number' id='firstName' />
            <label htmlFor='firstName'>Address</label>
            <input type='text' className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Address' id='firstName' />
            <label htmlFor='firstName'>Local Goverment</label>
            <input type='text' className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Local Goverment' id='firstName' />
            <label htmlFor='firstName'>State</label>
            <input type='text' className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='State' id='firstName' />

            <button className='w-full bg-blue-600 hover:bg-blue-500 rounded-md p-2 my-1'>Update Profile</button>
        </div>
    </>
  )
}

export default ProfiileUpdate