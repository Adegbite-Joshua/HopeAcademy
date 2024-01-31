import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPasswordForm = ({ userDetails }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const navigate = useNavigate();


    const handleNewPasswordChange = (e) => {
        const newPasswordValue = e.target.value;
        setNewPassword(newPasswordValue);
        setPasswordsMatch(newPasswordValue === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPasswordValue = e.target.value;
        setConfirmPassword(confirmPasswordValue);
        setPasswordsMatch(newPassword === confirmPasswordValue);
    };

    const saveNewPassword = () => {
        axios.post('https://hopeacademy.vercel.app/student/change_password', {
            studentClass: userDetails.studentClass,
            email: userDetails.email,
            newPassword
        }).then((res) => {
            if (res.status == 200) {
                alert('Password changed successfully')
                navigate('/signin')
            } else {
                alert('Error in saving your password, please try again')
            }
        })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
            <div className="mb-4">
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
                    New Password
                </label>
                <input
                    type="password"
                    className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                    id="newPassword"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                    Confirm Password
                </label>
                <input
                    type="password"
                    className={`mt-1 p-2 w-full border rounded focus:outline-none ${passwordsMatch ? 'border-gray-300' : 'border-red-500'}`}
                    id="confirmPassword"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                {!passwordsMatch && (
                    <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
                )}
            </div>
            <button
                className={`w-full bg-blue-500 text-white p-2 rounded ${passwordsMatch ? 'hover:bg-blue-600' : 'cursor-not-allowed opacity-50'}`}
                onClick={saveNewPassword}
                disabled={!passwordsMatch}
            >
                Change Password
            </button>
        </div>
    );
};

export default NewPasswordForm;
