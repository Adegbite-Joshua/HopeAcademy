import React from 'react'
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  const toggleNavBar =()=>{
    document.getElementById("navLinks").classList.toggle('hidden')
  }
  return (
    <>
        <div className='absolute basis-0 w-screen md:relative md:basis-1/12 flex flex-col justify-center align-middle h-16 md:h-screen bg-blue-500 hover:bg-blue-700 px-4 navbar'> 
            <div className='flex items-center justify-center md:contents relative'>
              <img src="vite.svg" className=' float-left h-12 w-12 md:mx-auto' alt="" />
              <h3 className='text-center font-extrabold'>PROADE</h3>
              <button onClick={toggleNavBar} className=' h-12 w-12 outline outline-2 outline-slate-400 ms-auto rounded-md md:hidden'><i className='fa fa-bars'></i></button>
            </div>
            <ul id='navLinks' className='navLinks hidden md:block text-start bg-black md:bg-inherit absolute md:relative top-16 right-0 left-0 z-50'>
                <li className='my-3 px-4 text-slate-400 text-white hover:text-slate-200'><NavLink className='pl-3' to='/dashboard'><i className='fa-solid fa-house-user'></i>Home</NavLink></li>
                <li className='my-3 px-4 text-slate-400 text-white hover:text-slate-200'><NavLink className='pl-3' to='/inbox'><i className='fa fa-comment fa-fade'></i> Inbox</NavLink></li>
                {/* <li className='my-3 px-4 text-slate-400 text-white hover:text-slate-200'><NavLink className='pl-3'><i className='fab fa-room'></i> Class</NavLink></li> */}
                <li className='my-3 px-4 text-slate-400 text-white hover:text-slate-200'><NavLink className='pl-3' to='/student'><i className='fa fa-user fa-fade'></i> Students</NavLink></li>
                <li className='my-3 px-4 text-slate-400 text-white hover:text-slate-200'><NavLink className='pl-3' to='/inbox'><i className='fa-thin fa-user-group fa-fade'></i> Messages</NavLink></li>
                <li className='my-3 px-4 text-slate-400 text-white hover:text-slate-200'><NavLink className='pl-3' to='/submit'><i className='fa fa-file fa-fade'></i> Submits</NavLink></li>
                <li className='my-3 px-4 text-slate-400 text-white hover:text-slate-200'><NavLink className='pl-3' to='/uploadfile'><i className='fa fa-folder-open fa-fade'></i> Files</NavLink></li>
                <li className='my-3 px-4 text-slate-400 text-white hover:text-slate-200'><NavLink className='pl-3' to='/setting'><i className='fa fa-gear fa-spi'></i> Settings</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default DashboardNav