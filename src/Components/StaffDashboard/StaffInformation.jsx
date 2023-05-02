import React from 'react'

const StaffInformation = () => {
  return (
    <>
        <div className="w-full flex items-center space-x-3 relative">
            <img src="vite.svg" alt="" className=" h-20 w-20 rounded-full" />
            <div className=''>
                <h3>Monica Howard</h3>
                <h5 className='text-slate-500'>Maths Teacher</h5>
                <span className=' absolute top-0 right-0 text-green-500'>Online</span>
            </div>
        </div>
    </>
  )
}

export default StaffInformation