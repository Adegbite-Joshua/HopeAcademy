import React from 'react'
import People from './People'

const OtherStaff = () => {
  
  return (
    <>
        <div className="w-full p-2">
            <h3 className=' text-center font-extrabold underline underline-offset-4'>Staff</h3>
            <select name="" id="" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50 px-6 my-2'>
              <option value="">JSS1</option>
              <option value="">JSS2</option>
              <option value="">JSS3</option>
              <option value="">SSS1</option>
              <option value="">SSS2</option>
              <option value="">SSS3</option>
            </select>
            {/* <People/>
            <People/>
            <People/>
            <People/>
            <People/>
            <People/>
            <People/>
            <People/>
            <People/>
            <People/>
            <People/>
            <People/>
            <People/>
            <People/> */}
        </div>
    </>
  )
}

export default OtherStaff