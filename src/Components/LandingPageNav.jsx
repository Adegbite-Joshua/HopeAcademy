// import React from 'react'
// import { NavLink } from "react-router-dom";

// const LandingPageNav = () => {
//   return (
//     <>
//         <div className=''>

//         </div>
//         <div className='LandingPageNav'>
//             <ul>
//                 <span>
//                     <img src="vite.svg" style={{float:'left'}} alt="" />
//                     PROADE SCHOOL
//                 </span>
//                 <li name='staff'><NavLink>Staff Site</NavLink></li>
//                 <li><NavLink to='/signup'>Sign Up</NavLink></li>
//                 <li><NavLink to='/signin'>Sign In</NavLink></li>
//                 <li><NavLink>Contsct Us</NavLink></li>
//                 <li><NavLink>About Us</NavLink></li>
//             </ul>
//         </div>
//     </>
//   )
// }

// export default LandingPageNav

import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'



const LandingPageNav = ({ percent }) => {
    // const [percentage, setpercentage] = useState(0)
    // window.onscroll=()=>setpercentage((window.scrollY/(document.documentElement.scrollHeight - window.innerHeight))*100)
    const showSideBar = () => {
        document.getElementById('navUl').classList.toggle('responsive')
    }

    const showSubLink = (container) => {
        document.getElementById(container).classList.toggle('responsive')
    }

    const showNavBar = () => {
        document.getElementById('adminNavBar').classList.toggle('responsive')
    }
    return (
        <>
            {/* <div className="sticky top-0 w-full" style={{zIndex: '9999999999'}}>
        <div className='LandingPageNav w-full bg-blue-500 flex relative '>
            <div className='flex h-full items-center'>
                <img src="vite.svg" alt="" style={{height: '50px', width: '50px'}} />
                <h3>PROADE SCHOOL</h3>
            </div>
            <ul id='navUl' className='navUl'>
                <li className="">
                    <NavLink className="" aria-current="page" to='/'>Home</NavLink>
                </li>
                <li class="signUpDropDown">
                    <a>Sign Up</a>
                    <ul>
                        <li><NavLink to='http://localhost:2000/signup'>Staff</NavLink></li>
                        <li><NavLink to='/signup'>Student</NavLink></li>
                    </ul>
                </li>
                <li className="">
                    <NavLink className="">Staff Portal</NavLink>
                </li>
                <li id='signInSubLink' className="relative group my-auto">
                    <span className='cursor-pointer' onClick={()=>showSubLink('signInSubLink')}>Sign In</span>
                    <div id='coursesSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
                    <ul>
                        <li><NavLink to='http://localhost:2000/signin'>Staff</NavLink></li>
                        <li><NavLink to='/signin'>Student</NavLink></li>
                    </ul>
                    </div>
                </li>
                <li className="">
                    <NavLink className="" to='/contactus'>Contact Us</NavLink>
                </li>
                <li className="">
                    <NavLink className="" to='/aboutus'>About Us</NavLink>
                </li>
            </ul>
            <span onClick={showSideBar}><i className='fa fa-bars'></i></span>
        </div>
        <div className='w-full bg-danger' style={{height: '8px'}}>
            <div style={{width: `${percentage}%`}} className='h-full bg-warning'>
            </div>
        </div>
        </div> */}
            <nav className="bg-blue-500 p-4 text-white h-28 sticky top-0 z-50">
                <div className="flex justify-between items-center h-full p-5 relative">
                    <Link to='/' className='h-full flex flex-row justify-center items-center gap-3'>
                        <img src="/vite.svg" className='w-32 h-full' alt="" />
                        <h6>HOPE Academy</h6>
                    </Link>
                    <button onClick={showNavBar} className='p-2 border-2 rounded-lg md:hidden'><i className='fa fa-bars'></i></button>
                    <div id='adminNavBar' className="md:flex md:space-x-10 h-screen md:h-full">
                        <Link to="/admin/dashboard" className= 'my-5 md:my-auto'>Home</Link>
                        <div className=" my-5 relative group md:my-auto">
                            <span className='cursor-pointer' onClick={() => showSubLink('accountSubLink')}>Sign Up</span>
                            <div id='accountSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
                                {/* <Link to="/admin/account/edit" className='block border-b-2 mb-3'>Edit Account</Link> */}
                                <Link to="/admin/account/staff" className='block border-b-2 mb-3'>Staff</Link>
                                <Link to="/admin/account/student" className='block border-b-2 mb-3'>Student</Link>
                                <Link to="/admin/account/new" className='block border-b-2 mb-3'>Admin</Link>
                            </div>
                        </div>
                        <div className=" my-5 relative group md:my-auto">
                            <span className='cursor-pointer' onClick={() => showSubLink('coursesSubLink')}>Sign In</span>
                            <div id='coursesSubLink' className="w-40 absolute hidden md:group-hover:block bg-white text-gray-800 p-2 rounded shadow-md">
                                <Link to="/admin/account/staff" className='block border-b-2 mb-3'>Staff</Link>
                                <Link to="/admin/account/student" className='block border-b-2 mb-3'>Student</Link>
                                <Link to="/admin/account/new" className='block border-b-2 mb-3'>Admin</Link>
                            </div>
                        </div>
                        <Link to="/" className=' my-5 md:my-auto'>Contact Us</Link>
                        <Link to="/" className=' my-5 md:my-auto'>About Us</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default LandingPageNav