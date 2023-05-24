import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FileView from '../StaffSubmit/FileView'

const FileMainDashboard = () => {
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  const [fileType, setfileType] = useState('.txt, .pdf, .doc, .docx, .rtf, .ppt, .pptx')
  const [fileTitle, setfileTitle] = useState('')
  const [fileDesceription, setfileDesceription] = useState('')
  const [file64, setfile64] = useState('')
  const [fileName, setfileName] = useState('')
  const selectFile =(e)=>{
    let selected = e.target.files[0]
    setfileName(selected.name)
    let reader = new FileReader();
    reader.readAsDataURL(selected)
    reader.onload =()=>{
      setfile64(reader.result)
    }
  }
  const uploadFile = ()=>{
    let fileDetails = {
      fileTitle,
      fileDesceription,
      file64,
      fileName
    }
    console.log(fileDetails);
  }
  return (
    <>
        <div className="FileMainDashboard middleDiv">
            {/* <FileView/> */}
            {/* type="application/pdf" can also be added */} 
            <div>

              <form action="" method="post">
                <label htmlFor="fileTitle">File Title</label>
                <input type="text" onKeyUp={(e)=>setfileTitle(e.target.value)} className=' my-1 w-full rounded-md p-2 focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' placeholder='File Title' />
                <label htmlFor="">File's Description</label>
                <textarea name="" id="" onKeyUp={(e)=>setfileDesceription(e.target.value)} className=' my-1 w-full h-24 focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500 p-2' placeholder='Post Describtion'></textarea>
                <label htmlFor="fileType">File Type</label>
                <select name="" id="" onChange={(e)=>setfileType(e.target.value)} className='w-full border-slate-900 focus:ring-4 focus:ring-purple focus:outline-none p-2 hover:boder-0 focus:ring-0 rounded-full  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-50 px-6 my-2'>
                  <option value=".mp4, .webm, .mpe, .mpv, .avi, .mpeg">Video</option>
                  <option value=".jpeg, .jpg, .gif, .tif, .psd">Image</option>
                  <option value=".mp4a, .flac, .mp4, .mp3, .wav">Audio</option>
                  <option selected value=".txt, .pdf, .doc, .docx, .rtf, .ppt, .pptx">Documents</option>
                </select>
                <div className=' w-full md:w-3/6 aspect-square block mx-auto'>
                    <object data="sound.p3" width="100%" height="100%">  
                        <div className=' bg-black flex w-full h-full items-center justify-center'>
                            <p className=' text-white'>The Choosed File Wil Appear Here</p>
                        </div>
                    </object>
                </div>
                <label htmlFor="" className='w-full'>
                    <span className="sr-only">Choose Fil To Upload</span>
                    <input type="file" accept={fileType} onChange={(e)=>selectFile(e)} className=' w-full my-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100' />
                </label>
                <button type='button' onClick={uploadFile} className=' w-3/6 block mx-auto p-2 my-1 bg-blue-600 hover:bg-blue-500 rounded-md'>Send File</button>
              </form>
              
            </div>
        </div>
    </>
  )
}

export default FileMainDashboard