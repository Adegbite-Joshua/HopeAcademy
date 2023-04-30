import React from 'react'
import { Link } from "react-router-dom";

const LandingPageNav = () => {
  return (
    <>
        <div className=''>

        </div>
        <div className='LandingPageNav'>
            <ul>
                <span>
                    <img src="vite.svg" style={{float:'left'}} alt="" />
                    PROADE SCHOOL
                </span>
                <li name='staff'><Link>Staff Site</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/signin'>Sign In</Link></li>
                <li><Link>Contsct Us</Link></li>
                <li><Link>About Us</Link></li>
            </ul>
        </div>
    </>
  )
}

export default LandingPageNav