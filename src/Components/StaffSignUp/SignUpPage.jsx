import axios from 'axios';
import { useFormik, validateYupSchema } from 'formik';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import FileViewer from '../../FileViewer'
import SnackBar from '../SnackBar'
import SignUpForm from './SignUpForm';


const SignUpPage = () => {
  
  return (
    <>
        <div className="flex bg-slate-200">
          <SignUpForm type='signup' />
          <div className="signupOtherDiv rounded-5">     
            <span className='px-3 py-2 rounded-full bg-black text-white'><Link>Sign In</Link></span>
          </div>
        </div>
    </>
  )
}

export default SignUpPage