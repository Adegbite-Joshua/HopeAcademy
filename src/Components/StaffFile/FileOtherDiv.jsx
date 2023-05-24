import React from 'react'
import { useSelector } from 'react-redux'
import FileViewer from './FileViewer'
import UploadedFile from './UploadedFile'

const FileOtherDiv = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  return (
    <>
        <div className="FileOtherDiv otherDiv">
            <h3 className=' text-center font-bold underline'>Upload Files</h3>
            <div className=''>
              {/* {staffInfo!={}?staffInfo.files.length>0?staffInfo.files.map((file, index) =>(<>
                <UploadedFile/>
                <UploadedFile/>
                <UploadedFile/>
                <UploadedFile/>
              </>)):'No file uploaded yet':'hhh'} */}
              <div className=' overflow-hidden' style={{width: '100%', height: '200px'}}>
                <FileViewer fileType='.jpeg, .pdf'/>
              </div>
            </div>
        </div>
    </>
  )
}

export default FileOtherDiv