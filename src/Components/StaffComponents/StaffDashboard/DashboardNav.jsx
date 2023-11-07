import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  const toggleNavBar =()=>{
    document.getElementById("navLinks").classList.toggle('hidden')
  }
  const staffNotifications = useSelector((state) => state.staffInformation.staffNotifications);
  const [notificationAmount, setnotificationAmount] = useState();
  useEffect(()=>{
    console.log(staffNotifications)
    if(staffNotifications && staffNotifications?.unread>0){
      setnotificationAmount(staffNotifications?.unread)
    } else {
      setnotificationAmount('')
    }
  }, [staffNotifications])
  return (
    <>
        <div className='absolute order-0 basis-0 w-screen md:relative md:basis-1/12 flex flex-col justify-center align-middle h-16 md:h-screen bg-blue-700 px-4 navbar'> 
            <div className='flex items-center justify-center md:contents relative'>
              <img src="/vite.svg" className=' float-left h-12 w-12 md:mx-auto' alt="" />
              <h3 className='text-center font-extrabold'>PROADE</h3>
              <button onClick={toggleNavBar} className=' h-12 w-12 outline outline-2 outline-slate-400 ms-auto rounded-md md:hidden'><i className='fa fa-bars'></i></button>
            </div>
            <ul id='navLinks' className='navLinks hidden md:block text-start bg-black md:bg-inherit absolute md:relative top-16 right-0 left-0 z-50'>
                <li className='my-3 px-4 text-white hover:text-slate-200'><NavLink className='pl-3' to='/staff/dashboard'>Home</NavLink></li>
                <li className='my-3 px-4 text-white hover:text-slate-200'><NavLink className='pl-3' to='/staff/inbox'>Inbox</NavLink></li>
                <li className='my-3 px-4 text-white hover:text-slate-200'><NavLink className='pl-3' to='/staff/class'>Class</NavLink></li>
                <li className='my-3 px-4 text-white hover:text-slate-200'><NavLink className='pl-3' to='/staff/student'>Students</NavLink></li>
                <li className='my-3 px-4 text-white hover:text-slate-200'><NavLink className='pl-3' to='/staff/submit'>Submits</NavLink></li>
                <li className='my-3 px-4 text-white hover:text-slate-200'><NavLink className='pl-3' to='/staff/uploadfile'>Files</NavLink></li>
                <li className='my-3 px-4 text-white hover:text-slate-200 relative'><NavLink className='pl-3' to='/staff/notifications'>Notifications</NavLink>{notificationAmount > 0 && (<span className='bg-red-500 text-white px-2 py-1 rounded-full absolute top-0 right-0 -mt-1 -mr-1'>{notificationAmount}</span>)}</li>
                <li className='my-3 px-4 text-white hover:text-slate-200'><NavLink className='pl-3' to='/staff/setting'>Settings</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default DashboardNav