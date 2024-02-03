import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import DisplayToast from '../CustomHooks/DisplayToast';
import { backendurl } from '../../constants/backendurl';


const MessageSchool = () => {
    const openForm = () => {
        document.getElementById("myForm1").style.display = "block";
    }
    const closeForm = () => {
        document.getElementById("myForm1").style.display = "none";
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: (values) => {
            console.log(values);
            let messageEndpoint = `${backendurl}student/messageschool`
            axios.post(messageEndpoint, values)
                .then((response) => {
                    if (response.status == 200) {
                        closeForm()
                        DisplayToast('success', 'Message successfully sent')
                    } else {
                        DisplayToast('error', 'An error ocurred, please try again')
                    }
                })
                .catch((error) => {
                    DisplayToast('error', 'An error ocurred, please try again')
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
                    <input type="text" name='name' {...formik.getFieldProps('name')} placeholder='Your Name ' required className='w-full border-2 p-2 hover:boder-0 rounded-md  placeholder-slate-400' />
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' {...formik.getFieldProps('email')} placeholder='Your email' required className='w-full border-2 p-2 hover:boder-0 rounded-md  placeholder-slate-400' />
                    <textarea placeholder="Type message.." {...formik.getFieldProps('message')} className='form-control bg-white mt-1' name="message" required></textarea>
                    <button type="submit" className="btn1"><i className='fa fa-send'></i></button>
                    <button type="button" className="btn1 cancel1 btn rounded-pill" onClick={closeForm}>Close</button>
                </form>
            </div>
        </>
    )
}

export default MessageSchool


