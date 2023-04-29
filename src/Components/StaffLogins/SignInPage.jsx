import React from 'react'

const SignInPage = () => {
  return (
    <>
        <div className='w-full h-24 h-screen bg-purple-600'>
            <div className="w-6/12 h-auto block mx-auto">
                <label htmlFor="">Email</label>
                <input type="text" className='w-full form focus:outline-none focus:ring focus:ring-2 focus:ring-red rounded-lg placeholder-text-slate-500' placeholder='Email' name='' />
                <label htmlFor="">Id Number</label>
                <input type="text" className='w-full form focus:outline-none focus:ring focus:ring-2 focus:ring-red rounded-lg placeholder-text-slate-500' placeholder='Staff Id' name='' />
                <label htmlFor="">Password</label>
                <input type="text" className='w-full form focus:outline-none focus:ring focus:ring-2 focus:ring-red rounded-lg placeholder-text-slate-500' placeholder='Staff Password' name='' />

            </div>

            
        </div>
    </>
  )
}

export default SignInPage