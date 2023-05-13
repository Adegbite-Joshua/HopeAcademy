import React from 'react'
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const toggleNavBar =()=>{
    document.getElementById("navLinks").classList.toggle('hidden')
  }
  return (
    <>
        <div className='absolute basis-0 w-screen md:relative md:basis-1/12 flex flex-col justify-center align-middle h-16 md:h-screen bg-blue-700 hover:bg-blue-500 px-4 navbar'> 
            <div className='flex items-center justify-center md:contents relative'>
              <img src="vite.svg" className=' float-left h-12 w-12' alt="" />
              <h3 className='text-center font-extrabold'>PROADE</h3>
              <button onClick={toggleNavBar} className=' h-12 w-12 outline outline-2 outline-slate-400 ms-auto rounded-md md:hidden'><i className='fa fa-bars'></i></button>
            </div>
            <ul id='navLinks' className='hidden md:block text-start bg-black md:bg-inherit absolute md:relative top-16 right-0 left-0 z-50'>
                <li className='my-3 px-4 text-slate-400 hover:text-slate-100'><Link to='/dashboard'><i className='fa fa-house'></i>Home</Link></li>
                <li className='my-3 px-4 text-slate-400 hover:text-slate-100'><Link to='/inbox'><i className='fa fa-inbox'></i> Inbox</Link></li>
                <li className='my-3 px-4 text-slate-400 hover:text-slate-100'><Link><i className='fab fa-room'></i> Class</Link></li>
                <li className='my-3 px-4 text-slate-400 hover:text-slate-100'><Link to='/student'><i className='fab fa-room'></i> Students</Link></li>
                <li className='my-3 px-4 text-slate-400 hover:text-slate-100'><Link to='/inbox'><i className='fab fa-room'></i> Messages</Link></li>
                <li className='my-3 px-4 text-slate-400 hover:text-slate-100'><Link to='/submit'><i className='fas fa'></i> Submits</Link></li>
                <li className='my-3 px-4 text-slate-400 hover:text-slate-100'><Link to='/uploadfile'><i className='fas fa'></i> Files</Link></li>
                <li className='my-3 px-4 text-slate-400 hover:text-slate-100'><Link to='/setting'><i className='fas fa'></i> Settings</Link></li>
            </ul>
        </div>
    </>
  )
}

export default DashboardNav