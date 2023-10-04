import React from 'react'
import { toast } from 'react-toastify';



const DisplayToast = (type, message) => {
    if(type=='success'){
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: '#4caf50', // Background color of the toast
            color: '#ffffff', // Text color of the toast
            fontSize: '16px', // Font size
          },
        });
      } else{
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: '#ff5252', 
            color: '#ffffff', 
            fontSize: '16px',
          },
        });
      }
  return ['return']
}

export default DisplayToast