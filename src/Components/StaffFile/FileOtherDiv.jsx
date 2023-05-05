import React from 'react'
import UploadedFile from './UploadedFile'

const FileOtherDiv = () => {
  return (
    <>
        <div className="FileOtherDiv otherDiv">
            <h3 className=' text-center font-bold underline'>Upload Files</h3>
            <div className=''>
                <UploadedFile/>
                <UploadedFile/>
                <UploadedFile/>
                <UploadedFile/>
            </div>
        </div>
    </>
  )
}

export default FileOtherDiv