import React, { useEffect, useState } from 'react'
import SignUpForm from '../../StaffSignUp/SignUpForm'
import Navbar from '../NavBar/NavBar'
import Account from './Account'
import PopUp from '../../PopUp';
import FetchAllStudentsAndStaffs from '../../../CustomHooks/AdminHooks/FetchAllStudentsAndStaffs';


const StaffAccount = () => {
    const [allStudents, allStaffs] = FetchAllStudentsAndStaffs();
    const [staffClass, setstaffClass] = useState(0);
    const [staffs, setstaffs] = useState([])
    const [viewingIndex, setviewingIndex] = useState(0)
    
    const searchStaff =(params)=>{
        if (params.trim().length>0) {
            const filtered = users.filter(user => user?.firstName?.includes(params) || user?.lastName?.includes(params) || user?.subject?.includes(params) || user?.email?.includes(params));
            setstaffs(filtered);
          } else {
            setstaffs(users)
          }
    }


    useEffect(() => {
      if(allStaffs.length>=1){
        setstaffs(allStaffs[staffClass])
      }
    }, [allStaffs, staffClass])

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = (index) => {
        setIsOpen(true);
        setviewingIndex(index)
    };

    const closePopup = () => {
        setIsOpen(false);
    };
    
  return (
    <>
        <Navbar/>
        <div className=''>
            <div className='flex items-center flex-col'>
                <label htmlFor="selectClass">Select Class</label>
                <select name="" onChange={(e)=>setstaffClass(e.target.value)} className=' w-40 h-12 bg-blue-100 border-0' id="">
                    <option value={0}>JSS 1</option>
                    <option value={1}>JSS 2</option>
                    <option value={2}>JSS 3</option>
                    <option value={3}>SSS 1</option>
                    <option value={4}>SSS 2</option>
                    <option value={5}>SSS 3</option>
                </select>
                <p className='my-1'>Search for staff by name, email, course</p>
                <input type="search" onKeyUp={(e)=>searchStaff(e.target.value)} className=' w-32 h-12 border-2 border-blue-400 rounded-lg focus:outline-0 p-2' />
            </div>
            <div className='w-full overflow-y-auto'>
                <table className='w-full overflow-y-auto'>
                    <caption className='my-2'>Staff Accounts</caption>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Assigned Course</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {staffs.map((user, index)=>(
                            <Account name={user.firstName + ' ' + user.lastName} email={user.email} other={user.subjectInfo.subjectName} openPopup={openPopup} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <PopUp isOpen={isOpen} onClose={closePopup}>
            <SignUpForm type='edit' data={staffs[viewingIndex]} />
        </PopUp>
    </>
  )
}

export default StaffAccount