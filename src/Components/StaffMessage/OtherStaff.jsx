import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import People from './People'


const OtherStaff = () => {
  let allStaffsInfo = useSelector((state)=>state.staffInformation.allStaffs)
  const [viewing, setviewing] = useState(0)
  return (
    <>
        <div className="w-full p-2">
            <h3 className=' text-center font-extrabold underline underline-offset-4'>Staff</h3>
            <select onChange={(e)=>setviewing(e.target.value)} name="" id="" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50 px-6 my-2'>
              <option value="0">JSS1</option>
              <option value="1">JSS2</option>
              <option value="2">JSS3</option>
              <option value="3">SSS1</option>
              <option value="4">SSS2</option>
              <option value="5">SSS3</option>
            </select>
            {allStaffsInfo[viewing]>0?allStaffsInfo[viewing].map((student, index)=>(<People/>)): <People/>}
            
        </div>
    </>
  )
}

export default OtherStaff