import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'



const LandingPageNav = ({ percent }) => {
    const showSideBar = () => {
        document.getElementById('navUl').classList.toggle('responsive')
    }

    const showSubLink = (container) => {
        document.getElementById(container).classList.toggle('responsive')
    }

    const showNavBar = () => {
        document.getElementById('adminNavBar').classList.toggle('responsive')
    }
    const [percentage, setpercentage] = useState(0)
    window.onscroll = () => setpercentage((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
    return(
    <div className='sticky top-0 z-50'>
        <nav className="bg-blue-500 p-4 text-white h-28 ">
            <div className="flex justify-between items-center h-full p-5 relative">
                <Link to='/' className='h-full flex flex-row justify-center items-center gap-3'>
                    <img src="/vite.svg" className='w-32 h-full' alt="" />
                    <h6>HOPE Academy</h6>
                </Link>
                <button onClick={showNavBar} className='p-2 border-2 rounded-lg md:hidden'><i className='fa fa-bars'></i></button>
                <div id='adminNavBar' className="md:flex md:space-x-10 h-screen md:h-full">
                    <Link to="/" className='my-5 md:my-auto'>Home</Link>
                    <div className=" my-5 relative group md:my-auto">
                        <span className='cursor-pointer' onClick={() => showSubLink('signUpSubLink')}>Sign Up</span>
                        <div id='signUpSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
                            <Link to="/student/signup" className='block border-b-2 mb-3'>Student</Link>
                            <Link to="/staff/signup" className='block border-b-2 mb-3'>Staff</Link>
                            <Link to="/admin/signup" className='block border-b-2 mb-3'>Admin</Link>
                        </div>
                    </div>
                    <div className=" my-5 relative group md:my-auto">
                        <span className='cursor-pointer' onClick={() => showSubLink('signInSubLink')}>Sign In</span>
                        <div id='signInSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
                            <Link to="/student/signin" className='block border-b-2 mb-3'>Student</Link>
                            <Link to="/staff/signin" className='block border-b-2 mb-3'>Staff</Link>
                            <Link to="/admin/signin" className='block border-b-2 mb-3'>Admin</Link>
                        </div>
                    </div>
                    <Link to="/contact_us" className=' my-5 md:my-auto'>Contact Us</Link>
                    <Link to="/about_us" className=' my-5 md:my-auto'>About Us</Link>
                </div>
            </div>
        </nav>
        <div className='w-full bg-red-400' style={{ height: '8px' }}>
            <div style={{ width: `${percentage}%` }} className='h-full bg-yellow-400'>
            </div>
        </div>
    </div>
    )
}

export default LandingPageNav