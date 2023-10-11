import React from 'react'
import Navbar from '../NavBar/NavBar'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'


const NewAcademicTerm = () => {
    const formik = useFormik({
        initialValues: {
          newTerm: '',
          lastTermForSession: false,
          schoolFeesAmount: '',
          staffSalary: '',
          authorizationCode: '',
          isChecked: false,
        },
        validationSchema: Yup.object({
          newTerm: Yup.string().required('Please Select The New Academic Term'),
          lastTermForSession: Yup.boolean(),
          schoolFeesAmount: Yup.number().typeError('School fees amount must be a number').required('School fees amount is required').positive('School fees amount must be a positive number'),
          staffSalary: Yup.number().typeError('Staff salary amount must be a number').required('Staff salary amount is required').positive('Staff salary amount must be a positive number'),
          authorizationCode: Yup.string().required('Please Input Your Admin Authorization Code'),
          isChecked: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
        }),
        onSubmit: (values) => {
          axios.post('http://localhost:7777/admin/start_new_academic_term', values)
          .then((res)=>{
            console.log(res)
            if (res.status==200){
            //   DisplayToast()
              toast.success('The New Term Operation Has Started', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                  background: '#4caf50', // Background color of the toast
                  color: '#ffffff', // Text color of the toast
                  fontSize: '16px', // Font size
                },
              });
            } 
          })
          .catch((error)=>{
            console.log(error)
            if (error.response.status==500) {
              toast.error('Server Error Please Try Again', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                  background: '#ff5252', 
                  color: '#ffffff', 
                  fontSize: '16px',
                },
              });
            } else if (error.response.status==408) {
              toast.error('Invalid Admin Token', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                  background: '#ff5252', 
                  color: '#ffffff', 
                  fontSize: '16px',
                },
              });
            } else {
              toast.error('An Error Occurred, Please Try Again', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                  background: '#ff5252', // Background color of the toast
                  color: '#ffffff', // Text color of the toast
                  fontSize: '16px', // Font size
                },
              })
            }
          })        
        },
        onError: (error) => {
          console.log(error)
        }
      });
  return (
    <>
        <Navbar/>
        <div className='p-10'>
            <form action="" onSubmit={formik.handleSubmit} className='w-full'>
                <div className='my-1 bg-blue-100 p-2'>
                    <label htmlFor="newTerm" className="text-gray-600">  The New Term</label>
                    <select id="newTerm" name="newTerm" onChange={formik.handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value={1}>1<sup>st</sup> Term</option>    
                        <option value={2}>2<sup>nd</sup> Term</option>    
                        <option value={3}>3<sup>rd</sup> Term</option>    
                    </select>
                {formik.touched.newTerm && formik.errors.newTerm ? (<p className="mt-2 text-sm text-red-600">{formik.errors.newTerm}</p>) : null}
                <label>
                    <input type="checkbox" name="lastTermForSession" id="lastTermForSession" checked={formik.values.lastTermForSession} onChange={formik.handleChange}/> 
                    Is this the last academic term for this academic session?
                </label>
                </div>
                <div className='grid grid-cols-1 md:flex my-1 bg-blue-100 p-2'>
                    <label htmlFor="schoolFeesAmount" className='basis-2/6'>Set School Fee Amount</label>
                    <input id="schoolFeesAmount" name="schoolFeesAmount" type="text" autoComplete="schoolFeesAmount" placeholder='Amount' value={formik.values.schoolFeesAmount} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                    {formik.touched.schoolFeesAmount && formik.errors.schoolFeesAmount ? (<p className="mt-2 text-sm text-red-600">{formik.errors.schoolFeesAmount}</p>) : null}
                </div>                
                <div className='grid grid-cols-1 md:flex my-1 bg-blue-100 p-2'>
                    <label htmlFor="staffSalary" className='basis-2/6'>Set Staff Salary</label>
                    <input id="staffSalary" name="staffSalary" type="text" autoComplete="staffSalary" placeholder='Amount' value={formik.values.staffSalary} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                    {formik.touched.staffSalary && formik.errors.staffSalary ? (<p className="mt-2 text-sm text-red-600">{formik.errors.staffSalary}</p>) : null}
                </div>                
                <div className='grid grid-cols-1 md:flex my-1 bg-blue-100 p-2'>
                    <label htmlFor="authorizationCode" className='basis-2/6'>Input Your Admin Authorization Code</label>
                    <input id="authorizationCode" name="authorizationCode" type="text" autoComplete="authorizationCode" placeholder='Amount' value={formik.values.authorizationCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                    {formik.touched.authorizationCode && formik.errors.authorizationCode ? (<p className="mt-2 text-sm text-red-600">{formik.errors.authorizationCode}</p>) : null}
                </div>                
                <div className='my-1'>
                <label>
                    <input type="checkbox" name="isChecked" checked={formik.values.isChecked} onChange={formik.handleChange}/> 
                    Are you sure you this term has ended, this will automatically generate your students information
                </label>
                {formik.touched.isChecked && formik.errors.isChecked ? (<p className="mt-2 text-sm text-red-600">{formik.errors.isChecked}</p>) : null}
                </div>             
                <div className='flex'><button type='submit' className='py-2 px-3 bg-blue-500 rounded-lg ms-auto'>Create Academic Term</button></div>
            </form>
        </div>
    </>
  )
}

export default NewAcademicTerm