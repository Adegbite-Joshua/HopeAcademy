// import React from 'react'
// import { Link } from "react-router-dom";

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
//                 <li name='staff'><Link>Staff Site</Link></li>
//                 <li><Link to='/signup'>Sign Up</Link></li>
//                 <li><Link to='/signin'>Sign In</Link></li>
//                 <li><Link>Contsct Us</Link></li>
//                 <li><Link>About Us</Link></li>
//             </ul>
//         </div>
//     </>
//   )
// }

// export default LandingPageNav

import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const LandingPageNav = ({percent}) => {
    // const [percentage, setpercentage] = useState(0)
    // window.onscroll=()=>setpercentage((window.scrollY/(document.documentElement.scrollHeight - window.innerHeight))*100)
    // const showSideBar =()=>{
    //     document.getElementById('navUl').classList.toggle('responsive')
    // }
  return (
    <>
        <div className="sticky top-0 w-full" style={{zIndex: '9999999999'}}>
        <div className='LandingPageNav w-full blue500 flex relative '>
            <div className='flex h-full items-center'>
                <img src="vite.svg" alt="" style={{height: '50px', width: '50px'}} />
                <h3>PROADE SCHOOL</h3>
            </div>
            <ul id='navUl' className=''>
                <li className="">
                    <Link className="" aria-current="page" to='/'>Home</Link>
                </li>
                <li class="signUpDropDown">
                    <a>Sign Up</a>
                    <ul>
                        <li><Link to='http://localhost:2000/signup'>Staff</Link></li>
                        <li><Link to='/signup'>Student</Link></li>
                    </ul>
                </li>
                <li className="">
                    <Link className="">Staff Portal</Link>
                </li>
                <li class="signInDropDown">
                    <a>Sign In </a>
                    <ul>
                        <li><Link to='http://localhost:2000/signin'>Staff</Link></li>
                        <li><Link to='/signin'>Student</Link></li>
                    </ul>
                </li>
                <li className="">
                    <Link className="" to='/contactus'>Contact Us</Link>
                </li>
                <li className="">
                    <Link className="" to='/aboutus'>About Us</Link>
                </li>
            </ul>
            <span><i className='fa fa-bars'></i></span>
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