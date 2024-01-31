import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DisplayToast from '../../src/CustomHooks/DisplayToast'
import LandingPageNav from '../../src/Components/LandingPageNav'
import LandingPageFooter from '../../src/Components/LandingPages/Footer'


const SignInPage = () => {
    document.querySelector('title').innerText = 'Sign In | Student'; 

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            password: '',
            class: 0,
            email: ''
        },
        // validationSchema: Yup.object({
        //   email: Yup.string()
        //     .min(2, 'Too Short!')
        //     .max(50, 'Too Long!')
        //     // .type(!string, 'String required')
        //     .required('Required'),
        //     password: Yup.string()
        //     .min(2, 'Too Short!')
        //     .max(50, 'Too Long!')
        //     // .type(!string, 'String required')
        //     .required('Required')
        // }),
        onSubmit: (values) => {
            let endpoint = 'https://hopeacademy.vercel.app/student/signin'
            axios.post(endpoint, values)
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        localStorage.studentToken = res.data.token
                        DisplayToast('success', 'Successfully Signed In')
                        navigate("/student/dashboard")
                    }
                })
                .catch((err) => {
                    if (err.response.status == 477) {
                        DisplayToast('error', 'Incorrect Password')
                    } else if (err.response.status == 478) {
                        DisplayToast('error', 'Invalid Email Address')
                    }else{
                        DisplayToast('error', 'Error Logging You In')
                    }
                })
        }
    })
    return (
        <>
            <LandingPageNav/>
            <h3 className='text-center bg-gray-200 m-0 py-2'>Sign In Page</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 h-screen px-4 bg-gray-200">
                <div className='bg-white p-8  rounded-lg'>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                        <label htmlFor="class">Class</label>
                        <select name="class" id="class" {...formik.getFieldProps('class')} required className='form-select p-2 border-2 rounded-md'>
                            <option value={0}>JSS 1</option>
                            <option value={1}>JSS 2</option>
                            <option value={2}>JSS 3</option>
                            <option value={3}>SSS 1</option>
                            <option value={4}>SSS 2</option>
                            <option value={5}>SSS 3</option>
                        </select>
                        <label htmlFor="email">Student Email</label>
                        <input className='form-input p-2 my-2 border-2 rounded-md' {...formik.getFieldProps('email')} id='email' name='email' type="email" placeholder='Student Email Address' />
                        <label htmlFor="password">Password</label>
                        <input className='form-input p-2 my-2 border-2 rounded-md' {...formik.getFieldProps('password')} id='password' name='password' type="password" placeholder='Password' />
                        <button type='submit' className='btn bg-green-500 text-white rounded p-2 hover:bg-green-600 focus:outline-none'>Sign In</button>
                        <Link to='/student/forgottenpassword' className='text-red-500 hover:underline'>Forgotten Password?</Link>
                        <p>New here? <Link to='/student/signup' className='text-blue-500 hover:underline inline'>Sign Up</Link></p>
                    </form>
                </div>
                <div style={{backgroundImage: "url('/teachers/gallary6.jpg')"}} className='signupOtherDiv h-full bg-gray-700 text-white p-4 rounded-lg'>
                    <button className=' w-24 px-3 py-2 rounded-full bg-blue-500 cursor-pointer hover:bg-blue-600'><Link to='/student/signup'>Sign Up</Link></button>
                </div>
            </div>
            <LandingPageFooter/>
        </>

    )
}

export default SignInPage