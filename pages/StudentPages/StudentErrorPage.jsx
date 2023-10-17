import React from 'react'
import Navbar from '../../src/Components/AdminComponents/NavBar/NavBar'
import ErrorMainDiv from '../../src/Components/ErrorPage/ErrorMainDiv'


const StudentErrorPage = () => {
    document.querySelector("title").innerText = `404 - Error Page`
  return (
    <>
        <div>
          <Navbar/>
          <ErrorMainDiv/>
        </div>
    </>
  )
}

export default StudentErrorPage