import React, { useState } from 'react';
import axios from 'axios'
import { backendurl } from '../../../../constants/backendurl';



const ResetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [studentClass, setstudentClass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${backendurl}student/send_password_link`, { email, studentClass })
            .then((res) => {
                console.log(res)
                if (res.status == 200) {
                    alert('Email sent')
                    setEmail('')
                    setstudentClass('')
                } else if (res.status == 403) {
                    alert('Invalid Student Information')
                }
            })
            .catch((error) => {
                console.log(error)
            })

    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-lg">
            <p className="mb-4">Are you sure you want to proceed without entering your password? A reset email will be sent to your registered email address.</p>
            <div className="mb-4">
                <label htmlFor="clas" className="block text-sm font-medium text-gray-600">Class</label>
                <select onChange={(e) => setstudentClass(e.target.value)} required className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
                    <option value={0} defaultValue>JSS1</option>
                    <option value={1}>JSS2</option>
                    <option value={2}>JSS3</option>
                    <option value={3}>SSS1</option>
                    <option value={4}>SSS2</option>
                    <option value={5}>SSS3</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email address:</label>
                <input
                    type="email"
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Reset Password
            </button>
        </form>
    );
};

export default ResetPasswordForm;
