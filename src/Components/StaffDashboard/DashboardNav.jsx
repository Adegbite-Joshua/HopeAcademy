import React from 'react'
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <>
        <div className='flex flex-col justify-center align-middle h-screen border border-2 px-4'> 
            <h3 className='text-center'>PROADE</h3>
            <ul className='text-center'>
                <li className='my-3 px-4 text-black'><Link><i className='fa-solid fa-house'></i>Home</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fa fa-inbox'></i> Inbox</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fab fa-class'></i> Class</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fas fa'></i> Students</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fas fa'></i> Tests</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fas fa'></i> Files</Link></li>
                <li className='my-3 px-4 text-slate-400'><Link><i className='fas fa'></i> Settings</Link></li>
            </ul>
        </div>
    </>
  )
}

export default DashboardNav