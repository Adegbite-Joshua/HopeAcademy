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
import { NavLink } from 'react-router-dom'



const LandingPageNav = ({percent}) => {
    // const [percentage, setpercentage] = useState(0)
    // window.onscroll=()=>setpercentage((window.scrollY/(document.documentElement.scrollHeight - window.innerHeight))*100)
    const showSideBar =()=>{
        document.getElementById('navUl').classList.toggle('responsive')
    }
  return (
    <>
        <div className="sticky top-0 w-full" style={{zIndex: '9999999999'}}>
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
                {/* <li className="">
                    <NavLink className="">Staff Portal</NavLink>
                </li> */}
                <li class="signInDropDown">
                    <a>Sign In </a>
                    <ul>
                        <li><NavLink to='http://localhost:2000/signin'>Staff</NavLink></li>
                        <li><NavLink to='/signin'>Student</NavLink></li>
                    </ul>
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
        {/* <div className='w-full bg-danger' style={{height: '8px'}}>
            <div style={{width: `${percentage}%`}} className='h-full bg-warning'>
            </div>
        </div> */}
        </div>
    </>
  )
}

export default LandingPageNav