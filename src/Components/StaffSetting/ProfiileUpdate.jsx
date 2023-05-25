import React from 'react'
import { useSelector } from 'react-redux'

const ProfiileUpdate = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  return (
    <>
        <div className="ProfiileUpdate">
            <h3>Edit Your Profile</h3>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' defaultValue={staffInfo.firstName} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='First Name' id='firstName' />
            <label htmlFor='firstName'>Last Name</label>
            <input type='text' defaultValue={staffInfo.lastName} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='First Name' id='firstName' />
            <label htmlFor='firstName'>Email</label>
            <input type='text' defaultValue={staffInfo.email} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Email' id='firstName' />
            <label htmlFor='firstName'>Phone Number</label>
            <input type='text' defaultValue={staffInfo.phoneNumber} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Phone Number' id='firstName' />
            <label htmlFor='firstName'>Address</label>
            <input type='text' defaultValue={staffInfo.address?staffInfo.address:''} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Address' id='firstName' />
            <label htmlFor='firstName'>Local Goverment</label>
            <input type='text' defaultValue={staffInfo.localGovernment?staffInfo.localGovernment:''} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Local Goverment' id='firstName' />
            <label htmlFor='firstName'>State</label>
            <input type='text' defaultValue={staffInfo.state?staffInfo.state:''} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='State' id='firstName' />
            <button className='w-full bg-blue-600 hover:bg-blue-500 rounded-md p-2 my-2'>Update Profile</button>
            {/* <button className='w-full bg-blue-600 hover:bg-blue-500 rounded-md p-2 my-2'>Reset Information</button> */}
        </div>
    </>
  )
}

export default ProfiileUpdate