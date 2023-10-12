import axios from 'axios';
// import DisplayToast from '../../../CustomHooks/DisplayToast';
import { useSelector, useDispatch } from 'react-redux';
import { updateAllCourses, setFetchingState } from '../../../redux/adminInformation';
import { useFormik, validateYupSchema } from 'formik';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import * as Yup from 'yup';


const News = ({ }) => {
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      type: '',
      body: '',
      head: '',
    },
    validationSchema: Yup.object({
      type: Yup.string().required('The Type Is Required'),
      body: Yup.string().required('The Body Is Required'),
      head: Yup.string().required('The Head Is Required'),
    }),
    onSubmit: (values)=>{
      console.log(values)
      submit(values);
    },
  })
  

  return (
    <form onSubmit={formik.handleSubmit} className='w-full border-2 my-2'>
        <div className="mb-4">
            <label htmlFor="type" className='text-white'>  Select Type</label>
            <select id="type" name="type" {...formik.getFieldProps('type')} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value='notice'>Notice</option>
                <option value='news'>News</option>
            </select>
            {formik.touched.type && formik.errors.type ? (<p className="mt-2 text-sm text-red-600">{formik.errors.type}</p>) : null}
        </div>
        <div className="mb-4">
        <label htmlFor="head" className='text-white'>head: </label>
            <textarea type="text" name='head' id='head' {...formik.getFieldProps('head')} className='w-full h-24 border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' ></textarea>
            {formik.touched.head && formik.errors.head ? (<p className="mt-2 text-sm text-red-600">{formik.errors.head}</p>) : null}
        </div>
        <div className="mb-4">
        <label htmlFor="body" className='text-white'>Body: </label>
            <textarea type="text" name='body' id='body' {...formik.getFieldProps('body')} className='w-full h-24 border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' ></textarea>
            {formik.touched.body && formik.errors.body ? (<p className="mt-2 text-sm text-red-600">{formik.errors.body}</p>) : null}
        </div>
        <div className='flex'><button className='bg-blue-500 p-2 my-2 rounded-md ms-auto me-4'>Add</button></div>
    </form>
  )
}

export default News