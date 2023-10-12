import React, {useEffect, useState} from 'react'
import DashboardNav from '../../src/Components/StaffComponents/StaffDashboard/DashboardNav'
import { useDispatch } from 'react-redux'
import fetchStaffInfo from '../../src/CustomHooks/StaffHooks/fetchStaffInfo'
import FileMainDashboard from '../../src/Components/StaffComponents/StaffFile/FileMainDashboard'
import FileOtherDiv from '../../src/Components/StaffComponents/StaffFile/FileOtherDiv'


const StaffFile = () => {
  const dispatch = useDispatch();
  let endpoint = 'http://localhost:7777/staff/dashboard'
  let [staffInfo, fetching, staffNot, notificationFetchingState] = fetchStaffInfo();
  
  
  // const fetchStaffInformation = ()=>{
  //   if (Object.keys(staffInfo).length === 0 && staffInfo.constructor === Object) {
  //     let endpoint = 'http://localhost:7777/staff/dashboard'
  //     let token = localStorage.token
  //     axios.post(endpoint, {token})
  //     .then((res)=>{
  //         console.log(res)
  //         if (res.status==200) {
  //           dispatch(fetchStaff(res.data))
  //           dispatch(setFetching(false))
  //         } else if(res.status != 200){
  //             state.staffInformation = 'error'
  //         }
  //     })
  //     .catch((err)=>{
  //         console.log(err);
  //     })
  //   }
  // }

  // const validateStaff =()=>{
  //   let token = localStorage.token
  //   let validateEndpoint = 'http://localhost:7777/staff/validatetoken'
  //   axios.get(validateEndpoint, {headers : {
  //     "Authorization": `Bearer ${token}`,
  //     "Content-Toe": "application/json",
  //     "Accept": "application/json"
  //   }})
  //   .then((res)=>{
  //     console.log(res);
  //     if (res.status == 200) {
  //       fetchStaffInformation()
  //     } else{
  //       // navigate('/signin')
  //     }
  //   })
  //   .catch((error)=>{
  //     // navigate('/signin')
  //     console.log(error);
  //   })
  // }

  useEffect(() => {
    // decide()
    // validateStaff()
  }, [])
  return (
    <>
        <div className='StaffFile containerAll'>
            <DashboardNav/>
            <FileMainDashboard/>
            <FileOtherDiv/>
        </div>
    </>
  )
}

export default StaffFile