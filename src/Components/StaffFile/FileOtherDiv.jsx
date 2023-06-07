import React from 'react'
import { useSelector } from 'react-redux'
import FileViewer from '../../FileViewer'
import UploadedFile from './UploadedFile'

const FileOtherDiv = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  let fetchingData = useSelector((state)=>state.staffInformation.staffFetchingState)
  return (
    <>
        <div className="FileOtherDiv otherDiv">
            <h3 className=' text-center font-bold underline'>Upload Files</h3>
            <div className=''>
              {!fetchingData?staffInfo.files.length>0?staffInfo.files.map((file, index) =>(<>
                <FileViewer fileLink={file.fileLink} fileType={file.fileType} />
              </>)):'No file uploaded yet':''}
              <div className=' overflow-hidden' style={{width: '100%', height: '200px'}}>
                <FileViewer fileLink='vite.svg' fileType='.jpeg, .pdf'/>
              </div>
            </div>
        </div>
    </>
  )
}

export default FileOtherDiv