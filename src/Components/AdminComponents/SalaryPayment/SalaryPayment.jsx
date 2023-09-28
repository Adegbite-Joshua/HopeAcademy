import React from 'react'
import Navbar from '../NavBar/NavBar'
import StaffAccountDetails from './StaffAccountDetails'

const SalaryPayment = () => {
  return (
    <div>
        <Navbar/>
        <div className=' grid grid-cols-1 md:flex'>
            <div className=' order-3 md:order-none basis-full md:basis-4/6 p-5'>
                <table className='w-full'>
                    <caption>Staffs Account Details</caption>
                    <thead className='w-full'>
                        <tr className='w-full'>
                            <td className='border-2 text-center'>Name</td>
                            <td className='border-2 text-center'>Bank Name</td>
                            <td className='border-2 text-center'>Account Number</td>
                            <td className='border-2 text-center'>Account Name</td>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <StaffAccountDetails name='Ade Kola' bankName='Opay' accountNumber='7015886456' accountName='Adegbite Joshua' />
                        <StaffAccountDetails name='Ade Kola' bankName='Opay' accountNumber='7015886456' accountName='Adegbite Joshua' />
                        <StaffAccountDetails name='Ade Kola' bankName='Opay' accountNumber='7015886456' accountName='Adegbite Joshua' />
                    </tbody>
                </table>
            </div>
            <div className=' mb-2 order-1 md:order-none basis-full md:basis-2/6 p-3 h-full overflow-y-auto'>
                <form className=''>
                    <div>
                        <h2 className='text-center text-4xl'>Your Balance On Paystack: #900,000.00</h2>
                        <label className='text-center my-2 block'>Select Class Staffs You Want To Pay</label>
                        <select name="" id=""  className='w-full border-2 border-blue-400 p-2 '>
                            <option value="">JSS 1</option>
                            <option value="">JSS 2</option>
                            <option value="">JSS 3</option>
                            <option value="">SSS 1</option>
                            <option value="">SSS 2</option>
                            <option value="">SSS 3</option>
                        </select>
                    </div>
                    <div className='my-1'>
                        <label htmlFor="">Input Your Admin Authorization Code</label>
                        <input type="text" placeholder='Authorization Code' className='w-full border-2 border-blue-400 p-2 ' />
                    </div>
                    {/* <div>
                        <input type="checkbox" className="accent-blue-400" />
                        <label htmlFor="">You are about paying the of #450,000, ensure you have up to this amount to </label>
                    </div> */}
                    <button className='bg-blue-400 p-2 rounded-lg w-full my-3 '>Pay Salary For JSS 1 Staffs</button>
                    
                </form>
                <form className=''>
                    <p>Send To Another Person</p>
                    <div className='my-1'>
                        <label htmlFor="">Account Number</label>
                        <input type="number" placeholder='Account Number' className='w-full border-2 border-blue-400 p-2 ' />
                    </div>
                    <div>
                        <label className='text-center my-2 block'>Select Bank</label>
                        <select name="" id=""  className='w-full border-2 border-blue-400 p-2 '>
                            <option value="">Opay</option>
                            <option value="">Zenith</option>
                            <option value="">KUDA</option>
                            <option value="">UBA</option>
                        </select>
                    </div>
                    <p>Account Name</p>
                    <button className='p-2 bg-blue-400 rounded-lg w-full'>Send Money</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SalaryPayment