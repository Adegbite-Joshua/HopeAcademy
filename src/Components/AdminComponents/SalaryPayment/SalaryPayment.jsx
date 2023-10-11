import axios from 'axios';
import React, { useState } from 'react'
import FetchAllStudentsAndStaffs from '../../../CustomHooks/AdminHooks/FetchAllStudentsAndStaffs';
import fetchBanksList from '../../../CustomHooks/fetchBanksList';
import Navbar from '../NavBar/NavBar'
import StaffAccountDetails from './StaffAccountDetails'

const SalaryPayment = () => {
  const [allStudents, allStaffs] = FetchAllStudentsAndStaffs()
  const [banksList] = fetchBanksList();
  const [accountName, setaccountName] = useState('Account Name Will Show Here')
  const [accountNumber, setaccountNumber] = useState('')
  const [bankCode, setbankCode] = useState('')
  const [staffClass, setstaffClass] = useState(0)
  const [adminToken, setadminToken] = useState('')

  const fetchAccountDetails = async()=>{
    if (accountNumber.length==10 && bankCode != ''){
      setaccountName('Fetching Your Details...')
      let getAccountDetails = await axios.get(`http://localhost:7777/get_account_details?bankCode=${bankCode}&accountNumber=${accountNumber}`)
      if(getAccountDetails.status){
        setaccountName(getAccountDetails.account_name)
      } else if(!getAccountDetails.status){
        setaccountName('No Matching Details')
      }
    }
  }

  let className = [
    'JSS 1',
    'JSS 2',
    'JSS 3',
    'SSS 1',
    'SSS 2',
    'SSS 3',
  ]

  const payStaffClass =()=>{
    let endpoint = 'http://localhost:7777/admin/'
    axios.post(endpoint, {class: staffClass, adminToken})
  }

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
                        {allStaffs[staffClass].length>=1?allStaffs[staffClass].map((staff)=>(
                            <StaffAccountDetails name={`${staff.firstName} ${staff.lastName}`} bankName={`${staff?.bankName}`} accountNumber={`${staff?.accountNumber}`} accountName={`${staff?.accountName}`} />
                        )) :''}
                    </tbody>
                </table>
            </div>
            <div className=' mb-2 order-1 md:order-none basis-full md:basis-2/6 p-3 h-full overflow-y-auto'>
                <form className=''>
                    <div>
                        <h2 className='text-center text-4xl'>Your Balance On Paystack: #900,000.00</h2>
                        <label className='text-center my-2 block'>Select Class Staffs You Want To Pay</label>
                        <select name="" id="" onChange={(e)=>{setstaffClass(e.target.value)}} className='w-full border-2 border-blue-400 p-2 '>
                            <option value={0}>JSS 1</option>
                            <option value={1}>JSS 2</option>
                            <option value={2}>JSS 3</option>
                            <option value={3}>SSS 1</option>
                            <option value={4}>SSS 2</option>
                            <option value={5}>SSS 3</option>
                        </select>
                    </div>
                    <div className='my-1'>
                        <label htmlFor="">Input Your Admin Authorization Code</label>
                        <input type="text" placeholder='Authorization Code' onChange={(e)=>setadminToken(e.target.value)} className='w-full border-2 border-blue-400 p-2 ' />
                    </div>
                    {/* <div>
                        <input type="checkbox" className="accent-blue-400" />
                        <label htmlFor="">You are about paying the of #450,000, ensure you have up to this amount to </label>
                    </div> */}
                    <button className='bg-blue-400 p-2 rounded-lg w-full my-3 '>Pay Salary For {`${className[staffClass]}`} Staffs</button>
                    
                </form>
                <form className=''>
                    <p>Send To Another Person</p>
                    <div className='my-1'>
                    <label htmlFor="" className='text-white'>Account Number</label>
                    <input type="text" name='accountNumber' id='accountNumber' onChange={(e)=>{
                        setaccountNumber(e.target.value)
                        fetchAccountDetails()
                    }} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' placeholder='Account Number' />
                    </div>
                    <div>
                        <label className='text-center my-2 block'>Select Bank</label>
                        <select id="bankCode" name="bankCode" onChange={(e)=>{
                            setbankCode((JSON.parse(e.target.value)).value)
                            fetchAccountDetails()
                        }} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            {banksList?banksList.map((bankDetails)=>(
                                <option value={JSON.stringify(bankDetails)}>{bankDetails.label}</option>
                            )):(<option value={null}>Fetching All Banks</option>)}
                        </select>
                    </div>
                    <p>{accountName}</p>
                    <button className='p-2 bg-blue-400 rounded-lg w-full'>Send Money</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SalaryPayment