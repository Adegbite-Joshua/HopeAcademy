import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      localGovernment: '',
      state: '',
      phoneNumber: '',
      dateOfBirth: '',
      // Add more fields here as needed
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      address: Yup.string().required('Address is required'),
      localGovernment: Yup.string().required('Local Government is required'),
      state: Yup.string().required('State is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      dateOfBirth: Yup.date().required('Date of Birth is required'),
      // Add validation for other fields here
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="firstName" className="text-gray-600">  First Name</label>
              <input id="firstName" name="firstName" type="text" autoComplete="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              {formik.touched.firstName && formik.errors.firstName ? (<p className="mt-2 text-sm text-red-600">{formik.errors.firstName}</p>) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="text-gray-600">  Last Name</label>
              <input id="lastName" name="lastName" type="text" autoComplete="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              {formik.touched.lastName && formik.errors.lastName ? (<p className="mt-2 text-sm text-red-600">{formik.errors.lastName}</p>) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-600">  Email</label>
              <input id="email" name="email" type="email" autoComplete="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              {formik.touched.email && formik.errors.email ? (<p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-gray-600"> Password</label>
              <input id="password" name="password" type="password" autoComplete="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              {formik.touched.password && formik.errors.password ? (<p className="mt-2 text-sm text-red-600">{formik.errors.password}</p>) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="text-gray-600">  Address</label>
              <input id="address" name="address" type="address" autoComplete="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              {formik.touched.address && formik.errors.address ? (<p className="mt-2 text-sm text-red-600">{formik.errors.address}</p>) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="text-gray-600">  State</label>
              <input id="state" name="state" type="text" autoComplete="state" value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              {formik.touched.state && formik.errors.state ? (<p className="mt-2 text-sm text-red-600">{formik.errors.state}</p>) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="localGovernment" className="text-gray-600">  Local Government</label>
              <input id="localGovernment" name="localGovernment" type="text" autoComplete="localGovernment" value={formik.values.localGovernment} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              {formik.touched.localGovernment && formik.errors.localGovernment ? (<p className="mt-2 text-sm text-red-600">{formik.errors.localGovernment}</p>) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="text-gray-600">  Phone Number</label>
              <input id="phoneNumber" name="phoneNumber" type="tel" autoComplete="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<p className="mt-2 text-sm text-red-600">{formik.errors.phoneNumber}</p>) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="text-gray-600">  Date Of Birth</label>
              <input id="dateOfBirth" name="dateOfBirth" type='' autoComplete="dateOfBirth" value={formik.values.dateOfBirth} onChange={formik.handleChange} onBlur={formik.handleBlur} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (<p className="mt-2 text-sm text-red-600">{formik.errors.dateOfBirth}</p>) : null}
            </div>

            {/* Repeat similar code for other form fields */}
            
            <div className="mb-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;