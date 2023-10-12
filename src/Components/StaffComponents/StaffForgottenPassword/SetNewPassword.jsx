import React, {useEffect, useState} from 'react'
import NewPasswordForm from './NewPasswordForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const SetNewPassword = ({token}) => {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({})
  

  useEffect(()=>{
    axios.post('http://localhost:7777/staff/check_password_link_validity', {token})
    .then((res)=>{
      console.log(res)
      if(res.status==203){
        alert('Invalid or expired token')
        navigate('/signin')
        return;
      }
      setuserDetails(res.data.result)
      console.log(res.data.result)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <div>
      <NewPasswordForm userDetails={userDetails} />
    </div>
  )
}

export default SetNewPassword;