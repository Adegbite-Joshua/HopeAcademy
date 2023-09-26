import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import OTPInput from 'react-otp-input';

const SignInForm = () => {
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      if (!otpSent) {
        // Simulate sending OTP (replace with your actual OTP sending logic)
        // For this example, we're just displaying the OTP field when the form is submitted.
        setOtpSent(true);
      } else {
        // Handle OTP verification logic here (compare with the OTP generated earlier)
        // For this example, we're just logging the OTP.
        console.log('OTP Verified:', otp);
      }
    },
  });


  const renderInput = (value, index) => {
    return (
      <input
        // key={index}
        type="number"
        // value={value}
        // onChange={() => {}}
        // onFocus={() => {}}
        // onBlur={() => {}}
        maxLength={1} // Set the maximum length of the input to 1 character
        // className="otp-input" // Apply any additional styling classes as needed
      />
    );
  };
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* OTP Input (Conditional) */}
            {otpSent && (
              <div className="mb-4">
                <label htmlFor="otp" className="text-gray-600">
                  OTP
                </label>
                <OTPInput
                  id="otp"
                  name="otp"
                  numInputs={6}
                  value={otp}
                  onChange={(otp) => setOtp(otp)}
                  isInputNum
                  renderInput={renderInput}
                />
              </div>
            )} 

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="text-gray-600">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.password}</p>
              )}
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {!otpSent ? 'Get OTP' : 'Verify OTP'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
