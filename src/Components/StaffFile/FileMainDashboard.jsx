import React from 'react'
import FileView from '../StaffSubmit/FileView'

const FileMainDashboard = () => {
  return (
    <>
        <div className="FileMainDashboard middleDiv">
            {/* <FileView/> */}
            <object data="vite.svg" width="100%" height="100%"> {/* type="application/pdf" can also be added */} 
                <p>Alternative text - include a link <a href="port.pdf">to the PDF!</a></p>
            </object>
        </div>
    </>
  )
}

export default FileMainDashboard