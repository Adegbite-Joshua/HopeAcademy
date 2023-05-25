import React from 'react'
import { useSelector } from 'react-redux'
import ButtonComp from '../ButtonComp'

const SubjectSetting = () => {
    let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  return (
    <>
        <div className="SubjectSetting w-full ">
            <label htmlFor="subjectName">Change Subject</label>
            <input type="text" className='w-full block p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' defaultValue='Mathematics' />
            <label htmlFor="subjectTeacher">Change Subject Information</label>
            <input type="text" className='w-full block p-2 text-slate-500 rounded-md focus:outline-0 focus:ring focus:ring-2 focus:ring-violet-500' defaultValue='' />
            <div className=' w-full md:w-3/6 aspect-square block mx-auto'>
                <object data="sound.p3" width="100%" height="100%" className=' rounded-lg my-2'>  
                    <div className=' bg-black flex w-full h-full items-center justify-center'>
                        <p className=' text-white'>The Choosed File Wil Appear Here</p>
                    </div>
                </object>
            </div>
            <label htmlFor="" className='w-full'>
                <span className="sr-only">Choose Fil To Upload</span>
                <input type="file" className=' w-full my-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100' />
            </label>
            <ButtonComp name='Update Subject Info'/>
        </div>
    </>
  )
}

export default SubjectSetting