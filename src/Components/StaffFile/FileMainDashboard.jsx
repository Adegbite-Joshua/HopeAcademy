import React from 'react'
import FileView from '../StaffSubmit/FileView'

const FileMainDashboard = () => {
  return (
    <>
        <div className="FileMainDashboard middleDiv">
            {/* <FileView/> */}
            {/* type="application/pdf" can also be added */} 
            
            <div>

              <form action="" method="post">
                <label htmlFor="fileTitle">File Title</label>
                <input type="text" className=' my-1 w-full rounded-md p-2 focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' placeholder='File Title' />
                <label htmlFor="">File's Description</label>
                <textarea name="" id="" className=' my-1 w-full h-24 focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500 p-2' placeholder='Post Describtion'></textarea>
                <div className=' w-full md:w-3/6 aspect-square block mx-auto'>
                    <object data="sound.p3" width="100%" height="100%">  
                        <div className=' bg-black flex w-full h-full items-center justify-center'>
                            <p className=' text-white'>The Choosed File Wil Appear Here</p>
                        </div>
                    </object>
                </div>
                <label htmlFor="" className='w-full'>
                    <span className="sr-only">Choose Fil To Upload</span>
                    <input type="file" className=' w-full my-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100' />
                </label>
                <button type='button' className=' w-3/6 block mx-auto p-2 my-1 bg-blue-600 hover:bg-blue-500 rounded-md'>Send File</button>
              </form>
              
            </div>
        </div>
    </>
  )
}

export default FileMainDashboard