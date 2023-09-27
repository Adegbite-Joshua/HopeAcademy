import React, { useState, useEffect } from 'react';
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
