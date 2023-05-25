import React , {useState}from 'react'
import { useSelector } from 'react-redux'

const ProfiileUpdate = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [address, setaddress] = useState('')
  const [localGovernment, setlocalGovernment] = useState('')
  const [state, setstate] = useState('')
  const [showpassword, setshowpassword] = useState(false)
  
  return (
    <>
        <div className="ProfiileUpdate">
            <h3>Edit Your Profile</h3>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' defaultValue={staffInfo.firstName} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='First Name' id='firstName' />
            <label htmlFor='firstName'>Last Name</label>
            <input type='text' defaultValue={staffInfo.lastName} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='First Name' id='lastName' />
            <label htmlFor='firstName'>Email</label>
            <input type='text' defaultValue={staffInfo.email} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Email' id='email' />
            <label htmlFor='firstName'>Phone Number</label>
            <input type='text' defaultValue={staffInfo.phoneNumber} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Phone Number' id='phoneNumber' />
            <label htmlFor='password'>Password</label>
            <input type={showpassword?'text':'password'} defaultValue={staffInfo.password} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Password' id='password' />
            <input type="checkbox" id='passwordShow' onChange={(e)=>setshowpassword(e.target.checked)} />
            <label htmlFor="">Show password</label> <br />
            <label htmlFor='firstName'>Address</label>
            <input type='text' defaultValue={staffInfo.address?staffInfo.address:''} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Address' id='address' />
            <label htmlFor='firstName'>Local Goverment</label>
            <input type='text' defaultValue={staffInfo.localGovernment?staffInfo.localGovernment:''} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='Local Goverment' id='localStorage' />
            <label htmlFor='firstName'>State</label>
            <input type='text' defaultValue={staffInfo.state?staffInfo.state:''} className=' w-full p-2 text-slate-600 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-600' placeholder='State' id='state' />
            <button className='w-full bg-blue-600 hover:bg-blue-500 rounded-md p-2 my-2'>Update Profile</button>
            {/* <button className='w-full bg-blue-600 hover:bg-blue-500 rounded-md p-2 my-2'>Reset Information</button> */}
        </div>
    </>
  )
}

export default ProfiileUpdate