import React from 'react'
import ButtonComp from '../ButtonComp'
import FileView from './FileView'
import FileViewer from '../../FileViewer'


const SubmitMainDIv = ({studentSubmit}) => {
    if(studentSubmit){
        console.log(studentSubmit)
    }
  return (
    <>
        <div className="SubmitMainDIv middleDiv relative">
            <button className=' bg-slate-500 p-2 w-auto h-auto rounded-md absolute top-2 right-2 opacity-25 hover:opacity-100'><i className=' fa fa-bars'></i></button>
            <div>
                <h3 className=' text-center font-bold underline'>PDF Title</h3>
                <h4 className=' text-center'>From: Adegbite Joshua</h4>
            </div>
            <div className='  h-3/6'>
                {/* <FileView/> */}
                {Object.keys(studentSubmit).length >=1  && studentSubmit.constructor === Object?<FileViewer fileType='.docx' fileLink={studentSubmit.fileLink} />:''}
                <ButtonComp name={`Message ${studentSubmit.studentName?studentSubmit.studentName:'Select A Submit'}`}/>
                <ButtonComp name='Go to Grading'/>
            </div>
        </div>
        
    </>
  )
}


export default SubmitMainDIv