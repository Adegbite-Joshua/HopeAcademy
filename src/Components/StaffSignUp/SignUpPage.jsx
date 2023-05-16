import axios from 'axios';
import { useFormik, validateYupSchema } from 'formik';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import * as Yup from 'yup';


// [
//   {
//     'MATHEMATICS': {}
//     'ENGLISH LANGUAGE': {}
//     'YORUBA': {}
//     'CIVIC EDUCATION': {}
//     'COMPUTER STUDIES': {}
//     'GEOGRAPHY': {}
//     'ECONOMICS': {}
//     'PHYSICS': {}
//     'CHEMISTRY': {}
//     'BIOLOGY': {}
//     'ANIMALHUSBANDRY': {}
//     'FURTHER MATHS': {}
//     'TECHNICALDRAWING ': {}
//   }
// ]
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
    'TECHNICAL DRAWING '
  ]
  // const findIndex =(e)=>{
  //   console.log(subjects.indexOf(e.target.value))
  // }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      staffIndex: 0,
      class: 0,
      address: '',
      localGovernment: '',
    },
    // validationSchema: Yup.object().shape({
    //   firstName: Yup.string()
    //     .min(2, 'Too Short!')
    //     .max(50, 'Too Long!')
    //     .type(!string, 'String required')
    //     .required('Required'),
    //   lastName: Yup.string()
    //     .min(2, 'Too Short!')
    //     .max(50, 'Too Long!')
    //     .type(!string, 'String required')
    //     .required('Required'),
    //   email: Yup.string().email('Invalid email').required('Required'),
    // }),
    onSubmit: (values)=>{
      // console.log(values);
      submit(values);
    }
  })
  const submit =(values)=>{
    let details = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
      staffIndex: values.staffIndex,
      class: values.class,
      address: '',
      localGovernment: '',
      state: '',
      links: {
          facebook: '',
          twitter: '',
          whatsapp: '',
          other: ''
      },
      subjectInfo: {
          subjectName: subjects[values.staffIndex],
          subjectDescription: '',
          subjectPicUrl: ''
      },
      activeStatus: false,
      messages: [],
      submittedWorks: [],
      timelines: [],
      groups: [],
      files: []
    }
    let endpoint = 'http://localhost:7777/staff/signup'
    console.log(details)
    axios.post(endpoint, details)
    .then((res)=>{
        console.log('success');
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  return (
    <>
        <div className='w-full h-24 h-screen bg-slate-200 pt-24'>
            <form onSubmit={formik.handleSubmit} className="w-full md:w-6/12 px-5 h-auto block mx-auto">
                <label htmlFor="" className=''>First Name</label>
                <input type="text" required name='firstName' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='First Name' />
                <small>{formik.errors.firstName}</small>
                <label htmlFor="" className=''>Last Name</label>
                <input type="text" required name='lastName' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Last Name' />
                <label htmlFor="" className=''>Email</label>
                <input type="text" required name='email' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Email' />
                <label htmlFor="" className=''>Phone Number</label>
                <input type="text" required name='phoneNumber' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Phone Number' />
                <label htmlFor="">Class</label>
                <select name="class" id="class" required onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50'>
                  <option value="0" selected>JSS1</option>
                  <option value="1">JSS2</option>
                  <option value="2">JSS3</option>
                  <option value="3">SSS1</option>
                  <option value="4">SSS2</option>
                  <option value="5">SSS3</option>
                </select>
                <label htmlFor="" className=''>Subject To Offer</label>
                <select  name="staffIndex" required onChange={formik.handleChange} id="staffIndex" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50 px-6'>
                  <option  value={subjects.indexOf('MATHEMATICS')} selected>MATHEMATICS</option>
                  <option  value={subjects.indexOf('ENGLISH LANGUAGE')}>ENGLISH LANGUAGE</option>
                  <option  value={subjects.indexOf('YORUBA')}>YORUBA</option>
                  <option  value={subjects.indexOf('CIVICEDUCATION')}>CIVIC EDUCATION</option>
                  <option  value={subjects.indexOf('COMPUTER STUDIES')}>COMPUTER STUDIES</option>
                  <option  value={subjects.indexOf('GEOGRAPHY')}>GEOGRAPHY</option>
                  <option  value={subjects.indexOf('ECONOMICS')}>ECONOMICS</option>
                  <option  value={subjects.indexOf('PHYSICS')}>PHYSICS</option>
                  <option  value={subjects.indexOf('CHEMISTRY')}>CHEMISTRY</option>
                  <option  value={subjects.indexOf('BIOLOGY')}>BIOLOGY</option>
                  <option  value={subjects.indexOf('ANIMAL HUSBANDRY')}>ANIMAL HUSBANDRY</option>
                  <option  value={subjects.indexOf('FURTHER MATHEMATICS')}>FURTHER MATHEMATICS</option>
                  <option  value={subjects.indexOf('TECHNICAL DRAWING ')}>TECHNICAL DRAWING</option>
                </select>
                <label htmlFor="">Address</label>
                <input type="text" required name='address' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Address' />
                <label htmlFor="">Password</label>
                <input type="text" required name='password' onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Staff Password' />
                <input type="checkbox" className='accent-red-400' name="" id="" /><small>Agreed to <Link>Terms</Link> and <Link>Cond</Link></small>
                <button type='submit' className='block py-2 bg-orange-500 w-full rounded-full hover:bg-orange-300'>Sign Up</button>
            </form>      
        </div>
    </>
  )
}

export default SignUpPage