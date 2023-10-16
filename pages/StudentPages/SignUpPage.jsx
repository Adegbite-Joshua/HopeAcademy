import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LandingPageNav from '../../src/Components/LandingPageNav'
import SignInPage from './SignInPage'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
// import SnackBar from '../../SnackBar'
import * as Yup from 'yup';




const SignUpPage = () => {
    const subjects = [
        'MATHEMATICS',
        'ENGLISH LANGUAGE',
        'YORUBA',
        'CIVIC EDUCATION',
        'COMPUTER STUDIES',
        'GEOGRAPHY',
        'ECONOMICS',
        'PHYSICS',
        'CHEMISTRY',
        'BIOLOGY',
        'ANIMAL HUSBANDRY',
        'FURTHER MATHEMATICS',
        'TECHNICAL DRAWING'
    ]
    const navigate = useNavigate()

    const [signingUp, setsigningUp] = useState(false)
    const [imageBase64, setimageBase64] = useState('')
    const submit = ({ firstName, lastName, email, password, address, subjects, clas }) => {
        let fullsubjects = [];
        subjects.map((subject, index) => {
            let subjectDetails = {
                subjectIndex: index,
                ca1: '',
                ca2: '',
                ca3: '',
                ca4: '',
                ca5: '',
                ass1: '',
                ass2: '',
                ass3: '',
                ass4: '',
                ass5: '',
                test1: '',
                test2: '',
                test3: '',
                bonus1: '',
                bonus2: '',
                exam: '',
                total: '',
                percent: '',
                position: ''
            }
            fullsubjects.push(subjectDetails)
        })
        const details = {
            firstName,
            lastName,
            email,
            password,
            address,
            class: clas,
            imageBase64,
            links: {
                twitter: '',
                facebook: '',
                whatsapp: '',
                other: ''
            },
            localGovernment: '',
            state: '',
            country: '',
            subjects: fullsubjects,
            tasks: []
        }
        console.log(details);
        let endpoint = 'http://localhost:7777/student/signup'
        if (imageBase64 != '') {
            setsigningUp(true)
            axios.post(endpoint, details)
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        setsnacksBarBody('Account Successfully Created')
                        setsnacksBarType('info')
                        showSnackBar()
                        setTimeout(() => navigate("/signin"), 1500);
                    } else if (res.status == 11000) {
                        setsnacksBarBody('Email Entered Already Exists')
                        setsnacksBarType('error')
                        showSnackBar()
                        setsigningUp(false)
                    } else if (res.status == 401) {
                        setsnacksBarBody('Error! Ensure You Fill All Reqired Informations Correctly')
                        setsnacksBarType('error')
                        showSnackBar()
                        setsigningUp(false)
                    }
                })
                .catch((err) => {
                    setsigningUp(false)
                    console.log(err);
                })
        } else {
            setsnacksBarBody('Please Select An Image')
            setsnacksBarType('error')
            showSnackBar()
        }
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            state: '',
            localGovernment: '',
            subjects: [0, 1],
            clas: 0
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            lastName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email')
                .required('Required'),
            password: Yup.string()
                .min(5, 'Too Short')
                .max(40, 'Too Long')
                .required('Required'),
            address: Yup.string()
                .min(2, 'Too Short')
                .max(230, 'Too Long')
                .required('Required'),
            localGovernment: Yup.string()
                .min(2, 'Too Short')
                .max(230, 'Too Long')
                .required('Required'),
            state: Yup.string()
                .min(2, 'Too Short')
                .max(230, 'Too Long')
                .required('Required')
        }),
        onSubmit: (values) => {
            submit(values)
        }
    })
    const selectImage = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setimageBase64(reader.result)
        }
    }
    // const [snacksBarBody, setsnacksBarBody] = useState('')
    // const [snacksBarType, setsnacksBarType] = useState('info')

    // const showSnackBar = () => {
    //     // Get the snackbar DIV
    //     var x = document.getElementById("snackbarContainer");
    //     x.className = "show";

    //     setTimeout(() => { x.className = x.className.replace("show", ""); }, 3000);
    // }
    return (
        <>
            <LandingPageNav />
            <h3 className='text-center bg-light m-0 p-3'>Sign Up Page</h3>
            <div className="flex w-full p-4 topSpace bg-light gap-3">
                <div className="border signup rounded-5 p-5 flex flex-col">
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <input {...formik.getFieldProps('firstName')} className='w-full border-2 rounded-md p-2 h-12 my-2' type="text" id='firstName' name='firstName' placeholder='First Name' />
                        <small className='text-danger'>{formik.touched.firstName && formik.errors.firstName}</small><br />
                        <label htmlFor="lastName">Last Name</label>
                        <input {...formik.getFieldProps('lastName')} className='w-full border-2 rounded-md p-2 h-12 my-2' id='lastName' name='lastName' type="text" placeholder='Last Name' />
                        <small className='text-danger'>{formik.touched.lastName && formik.errors.lastName}</small><br />
                        <label htmlFor="email">Email</label>
                        <input {...formik.getFieldProps('email')} className='w-full border-2 rounded-md p-2 h-12 my-2' id='email' name='email' type="text" placeholder='Email' />
                        <small className='text-danger'>{formik.touched.email && formik.errors.email}</small><br />
                        <label htmlFor="password">Password</label>
                        <input {...formik.getFieldProps('password')} className='w-full border-2 rounded-md p-2 h-12 my-2' id='password' name='password' type="password" placeholder='Password' />
                        <small className='text-danger'>{formik.touched.password && formik.errors.password}</small><br />
                        <label htmlFor="clas">Class</label>
                        <select name="clas" id="clas" onChange={formik.handleChange} required className='w-full border-2 rounded-md p-2 h-12 my-2'>
                            <option value="0">JSS1</option>
                            <option value="1">JSS2</option>
                            <option value="2">JSS3</option>
                            <option value="3">SSS1</option>
                            <option value="4">SSS2</option>
                            <option value="5">SSS3</option>
                        </select>
                        <label htmlFor="subjects">Subjects</label>
                        <select onChange={formik.handleChange} className='w-full border-2 rounded-md p-2 h-12 my-2' multiple name='subjects' id="subjects">
                            <option selected disabled value={subjects.indexOf('MATHEMATICS')}> MATHEMATICS </option>
                            <option selected disabled value={subjects.indexOf('ENGLISH LANGUAGE')}> ENGLISH LANGUAGE </option>
                            <option value={subjects.indexOf('YORUBA')}> YORUBA </option>
                            <option value={subjects.indexOf('CIVIC EDUCATION')}> CIVIC </option>
                            <option value={subjects.indexOf('COMPUTER STUDIES')}> COMPUTER </option>
                            <option value={subjects.indexOf('GEOGRAPHY')}> GEOGRAPHY </option>
                            <option value={subjects.indexOf('ECONOMICS')}> ECONOMICS </option>
                            <option value={subjects.indexOf('PHYSICS')}> PHYSICS </option>
                            <option value={subjects.indexOf('CHEMISTRY')}> CHEMISTRY </option>
                            <option value={subjects.indexOf('BIOLOGY')}> BIOLOGY </option>
                            <option value={subjects.indexOf('ANIMAL HUSBANDRY')}> ANIMAL </option>
                            <option value={subjects.indexOf('FURTHER MATHEMATICS')}> FURTHER MATHS </option>
                            <option value={subjects.indexOf('TECHNICAL DRAWING')}> TECHNICA </option>
                        </select>
                        <label htmlFor='address'>Address</label>
                        <input type='text' className='w-full border-2 rounded-md p-2 h-12' {...formik.getFieldProps('address')} placeholder='Address' id='address' name='address' />
                        <small className='text-danger'>{formik.touched.address && formik.errors.address}</small><br />
                        <label htmlFor='localGovernment'>Local Goverment</label>
                        <input type='text' className='w-full border-2 rounded-md p-2 h-12' {...formik.getFieldProps('localGovernment')} placeholder='Local Goverment' id='localGovernment' name='localGovernment' />
                        <small className='text-danger'>{formik.touched.localGovernment && formik.errors.localGovernment}</small><br />
                        <label htmlFor='state'>State</label>
                        <input type='text' className='w-full border-2 rounded-md p-2 h-12' {...formik.getFieldProps('state')} placeholder='State' id='state' name='state' />
                        <small className='text-danger'>{formik.touched.state && formik.errors.state}</small><br />
                        <div style={{ aspectRatio: '1' }} className='w-3/6 mx-auto bg-black opacity-3/6 my-2 flex justify-center items-center'>
                            <h3 className='text-light'>Profile Picture</h3>
                        </div>
                        <input type="file" onChange={(e) => selectImage(e)} name="pictureUrl" className='w-full border-2 rounded-md p-2 h-12' id="" />
                        <button type='submit' className='btn btn-success w-100 d-block my-2' disabled={signingUp ? true : false}>{signingUp ? 'Signing Up' : 'Sign Up'}</button>
                        <Link className='d-md-none text-light'>Sign In</Link>
                    </form>
                </div>
                <div className="signupOtherDiv rounded-5 flex items-center justify-center">
                    <span className='px-3 py-2 rounded-pill bg-dark text-light'><Link to='/signin'>Sign In</Link></span>
                </div>
            </div>
            {/* <div id='snackbarContainer'><SnackBar body={snacksBarBody} type={snacksBarType} /></div> */}
        </>
    )
}

export default SignUpPage