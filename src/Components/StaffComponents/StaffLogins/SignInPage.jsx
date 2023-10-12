import React, {useState} from 'react'
import { Formik, useFormik } from 'formik'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import SnackBar from '../SnackBar';




const SignInPage = () => {
  const navigate = useNavigate()
  const formik  = useFormik({
    initialValues: {
      email: '',
      class: 0,
      password: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    }),
    onSubmit: (values)=>{
      console.log(values);
      let endpoint = 'http://localhost:7777/staff/signin'
      axios.post(endpoint, values)
      .then((res)=>{
          console.log('success');
          console.log(res);
          if (res.status==200) {
            localStorage.setItem('token', res.data.token)
            localStorage.token = res.data.token
            // alert('found')
            // navigate('/dashboard')
            setTimeout(() => navigate("/staff/dashboard"), 3000);
            setsnacksBarBody('Successfully Signed In')
            setsnacksBarType('info')
            showSnackBar()
          } else if(res.status==11000){
            setsnacksBarBody('Email Already Exixts')
            setsnacksBarType('error')
            showSnackBar()
          } else if(res.status==401){
            setsnacksBarBody('Error Logging You In')
            setsnacksBarType('error')
            showSnackBar()
          }
      })
      .catch((err)=>{
          console.log(err);
      })
      }
  })
  const [snacksBarBody, setsnacksBarBody] = useState('Email')
  const [snacksBarType, setsnacksBarType] = useState('info')

  const showSnackBar = () => {
      // Get the snackbar DIV
      // alert('showing')
      var x = document.getElementById("snackbarContainer");
      x.className = "show";
    
      setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
  }
  window.showSnackBar = showSnackBar
  return (
    <>
        <div className="flex h-screen">
          <div className='signinMainDiv bg-slate-200 pt-24 flex justify-center items-center '>
              <form onSubmit={formik.handleSubmit} className="h-auto mx-auto">
                  <label htmlFor="" className=''>Email</label>
                  <input onChange={formik.handleChange} type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Email' name='email' />
                  <label htmlFor="">Class</label>
                  {/* <input onChange={formik.handleChange} type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Staff Id' name='staffId' /> */}
                  <select name="class" id="class" required onChange={formik.handleChange} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50'>
                    <option value={0} selected>JSS1</option>
                    <option value={1}>JSS2</option>
                    <option value={2}>JSS3</option>
                    <option value={3}>SSS1</option>
                    <option value={4}>SSS2</option>
                    <option value={5}>SSS3</option>
                  </select>
                  <label htmlFor="">Password</label>
                  <input onChange={formik.handleChange} type="text" className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Staff Password' name='password' />
                  <input type="checkbox" className='accent-red-400' name="" id="" /><small className='text-white'>Remenber me</small>
                  <button type='submit' className='block py-2 bg-orange-500 w-full rounded-full hover:bg-orange-300'>Sign In</button>
              </form>            
          </div>
          <div className='signinOtherDiv rounded-4'>
            <span className='px-3 py-2 rounded-pill bg-blue-700 text-white rounded-full'><Link>Sign Up</Link></span>
          </div>
        </div>
        <div id='snackbarContainer'><SnackBar body={snacksBarBody} type={snacksBarType}/></div>
    </>
  )
}

export default SignInPage