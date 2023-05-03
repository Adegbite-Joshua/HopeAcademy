import React from 'react'
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <>
        <div className=' absolute basis-0 w-screen md:relative md:basis-1/12 flex flex-col justify-center align-middle h-16 md:h-screen bg-blue-700 hover:bg-blue-500 px-4 navbar'> 
            <div className='flex items-center justify-center md:contents'>
              <img src="vite.svg" className=' float-left h-12 w-12' alt="" />
              <h3 className='text-center font-extrabold'>PROADE</h3>
            </div>
            <ul className='text-start bg-black md:bg-inherit top-full right-0 left-0 '>
                <li className='my-3 px-4 text-black'><Link to='/dashboard'><i className='fa fa-house'></i>Home</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link to='/inbox'><i className='fa fa-inbox'></i> Inbox</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fab fa-room'></i> Class</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link to='/student'><i className='fab fa-room'></i> Students</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fas fa'></i> Tests</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fas fa'></i> Files</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fas fa'></i> Settings</Link></li>
            </ul>
        </div>
    </>
  )
}

export default DashboardNav