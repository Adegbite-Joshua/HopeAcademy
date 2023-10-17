import React from 'react'
import { NavLink } from 'react-router-dom'

const NabBar = () => {
    const openNavPop = () => {
        document.getElementById('mySidenav').classList.toggle('responsive')
    }
    return (
        <>
            <div id="mySidenav" className="sidenav bg-blue-600 text-center flex flex-col items-center justify-center px-5">
                <img src="/vite.svg" className='h-16 w-16 mr-2' alt="" />
                <h3 className='text-white font-semibold text-xl'>HOPE Academy</h3>
                <NavLink to='/student/dashboard' className="nav-link"><span className='flex items-center'><i className='hidden fas fa-home mr-2'></i>Dashboard</span></NavLink>
                <NavLink to='/student/inbox' className="nav-link"><span className='flex items-center'><i className='hidden fas fa-inbox mr-2'></i>Inbox</span></NavLink>
                <NavLink to='/student/subjects' className="nav-link"><span className='flex items-center'><i className='hidden fas fa-book mr-2'></i>Subjects</span></NavLink>
                <NavLink to='/student/announcement' className="nav-link"><span className='flex items-center'><i className='hidden fas fa-bell mr-2'></i>Announcements</span></NavLink>
                <NavLink to='/student/activities' className="nav-link"><span className='flex items-center'><i className='hidden fas fa-calendar mr-2'></i>Activities</span></NavLink>
                <NavLink to='/student/feepayment' className="nav-link"><span className='flex items-center'><i className='hidden fas fa-dollar-sign mr-2'></i>Payments</span></NavLink>
                <NavLink to='/student/profile' className="nav-link"><span className='flex items-center'><i className='hidden fas fa-cog mr-2'></i>Profile</span></NavLink>
                <NavLink to='/' className="nav-link"><span className='flex items-center'><i className='hidden fas fa-sign-out-alt mr-2'></i>Sign Out</span></NavLink>
                <span id='openPop' className='p-2 rounded-md border-2 border-white md:hidden' onClick={openNavPop}>
                    <i className='fas fa-bars text-white'></i>
                </span>
            </div>
        </>

    )
}

export default NabBar