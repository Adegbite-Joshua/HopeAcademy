// import React from 'react'

// const MessageSchool = () => {
//     const openForm =()=> {
//         document.getElementById("myForm1").style.display = "block";
//     }
    
//     const closeForm =()=> {
//         document.getElementById("myForm1").style.display = "none";
//     }
//   return (
//     <>
//         <button className="open-button1 p-2 rounded-full" onClick={openForm}>Message Us</button>
//         <div className="chat-popup1" id="myForm1">
//         <form action="/action_page.php" className="form-container1">
//             <h1>Chat</h1>
//             <label for="msg"><b>Message</b></label>
//             <textarea placeholder="Type message.." name="msg" required></textarea>
//             <button type="submit" className="btn1"><i className='fas fa-send'></i></button>
//             <button type="button" className="btn1 cancel1 btn rounded-pill p-2" onClick={closeForm}>Close</button>
//         </form>
//         </div>
//     </>
//   )
// }

// export default MessageSchool




import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import SnackBar from './SnackBar';
// import SnackBar from '../SnackBar';

const MessageSchool = () => {
    const [snackbarMessage, setsnackbarMessage] = useState('');
    const [snackbarType, setsnackbarType] = useState('');
    const openForm =()=> {
        document.getElementById("myForm1").style.display = "block";
    }
    const closeForm =()=> {
        document.getElementById("myForm1").style.display = "none";
    }

    const showSnackBar = () => {
        // Get the snackbar DIV
        var x = document.getElementById("snackbarContainer");
        x.className = "show";
      
        setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: (values)=>{
            console.log(values);
            let messageEndpoint = 'http://localhost:7777/student/messageschool'
            axios.post(messageEndpoint, values)
            .then((response)=>{
                if (response.status == 200) {
                   alert('Message sent') 
                   setsnackbarType('info')
                   setsnackbarMessage('Message successfully sent')
                   closeForm()
                   showSnackBar()
                } else{
                    setsnackbarType('error')
                    setsnackbarMessage('An error ocurred, please try again')
                    // closeForm()
                    showSnackBar()
                    // alert('errpr in sending message')
                }
            })
            .catch((error)=>{
                setsnackbarType('error')
                setsnackbarMessage('An error ocurred, please try again')
                // closeForm()
                showSnackBar()
                // console.log(error);
            })
        }
    })
  return (
    <>
        <button className="open-button1 p-2 rounded-pill" onClick={openForm}>Message Us</button>
        <div className="chat-popup1" id="myForm1">
        <form className="form-container1" onSubmit={formik.handleSubmit}>
            <h1>Chat</h1>
            <small>Having any question, suggestion or issue?</small>
            <label for="message"><b>Message Hope Academy Admin</b></label><br />
            <label htmlFor="name">Name</label>
            <input  type="text" name='name' {...formik.getFieldProps('name')} placeholder='Your Name ' required className='w-full border-slate-900 focus:ring-4 border-2 border-slate-600 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' />
            <label htmlFor="email">Email</label>
            <input  type="email" name='email' {...formik.getFieldProps('email')} placeholder='Your email' required className='w-full border-slate-900 focus:ring-4 border-2 border-slate-600 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50' />
            <textarea placeholder="Type message.." {...formik.getFieldProps('message')} className='form-control mt-1' name="message" required></textarea>
            <button type="submit" className="btn1"><i className='fas fa-send'></i></button>
            <button type="button" className="btn1 cancel1 btn rounded-pill" onClick={closeForm}>Close</button>
        </form>
        </div>
        <div id='snackbarContainer'><SnackBar body={snackbarMessage} type={snackbarType}/></div>
    </>
  )
}

export default MessageSchool


