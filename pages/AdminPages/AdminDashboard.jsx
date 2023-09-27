import React, { useState, useEffect } from 'react';
import EventAndCalendar from '../../src/Components/AdminComponents/Dashboard/EventAndCalendar';
import Profile from '../../src/Components/AdminComponents/Dashboard/Profile';
import Statistics from '../../src/Components/AdminComponents/Dashboard/Statistics';
import NavBar from '../../src/Components/AdminComponents/NavBar/NavBar';

function AdminDashboard() {
    const [studentCount, setStudentCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);

    useEffect(() => {
        // Simulate fetching data from an API
        // Replace this with actual data fetching
        setTimeout(() => {
            setStudentCount(150); // Set the number of students
            setStaffCount(25);    // Set the number of staff
        }, 1000);
    }, []);

    return (
        <>
            <div className=''>
                <NavBar/>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className=' order-3 md:order-1 col-start-6 md:col-start-4'>
                        <Statistics/>
                        <EventAndCalendar/>
                    </div>
                    <div className=' order-1 md:order-3 col-start-6 md:col-start-2'>
                        <Profile/>
                    </div>
                </div>
                {/* <div className="bg-blue-500 p-4">
                    <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                    <div className="mt-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Essential Information</h2>
                            <div>
                                <p>Total Students: {studentCount}</p>
                                <p>Total Staff: {staffCount}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Quick Access</h2>
                            <ul>
                                <li>
                                    <a href="/students">View Students</a>
                                </li>
                                <li>
                                    <a href="/staff">View Staff</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default AdminDashboard;
