import React from 'react'
import ErrorMainDiv from '../../src/Components/ErrorPage/ErrorMainDiv'
import NavBar from '../../src/Components/StudentComponents/NavBar'


const StudentErrorPage = () => {
    document.querySelector("title").innerText = `404 - Error Page`
  return (
    <>
        <div>
          <NavBar/>
          <ErrorMainDiv/>
        </div>
    </>
  )
}

export default StudentErrorPage