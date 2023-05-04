import React from 'react'
import ButtonComp from '../ButtonComp'
import FileView from './FileView'

const SubmitMainDIv = () => {
  return (
    <>
        <div className="SubmitMainDIv middleDiv relative">
            <button className=' bg-slate-500 p-2 w-auto h-auto rounded-md absolute top-2 right-2 opacity-25 hover:opacity-100'><i className=' fa fa-bars'></i></button>
            <div>
                <h3 className=' text-center font-bold underline'>PDF Title</h3>
                <h4 className=' text-center'>From: Adegbite Joshua</h4>
            </div>
            <div className='  h-3/6'>
                {/* <embed src="port.pdf" type="application/pdf" width={400} height={400}>
                    <noembed>
                        <p>
                            Your browser does not support PDF files.
                            <a href="mypdf.pdf">Download the file instead</a>
                        </p>
                    </noembed>
                </embed> */}
                <FileView/>
                <ButtonComp name='Message Adegbite'/>
                <ButtonComp name='Go to Grading'/>
                {/* <button className=' p-2 bg-blue-600 hover:bg-blue-500 rounded-md w-3/6 m-2' ></button>
                <button className=' p-2 bg-blue-600 hover:bg-blue-500 rounded-md w-3/6 m-2' name=''>Message Adegbite</button> */}
            </div>
        </div>
        
    </>
  )
}


export default SubmitMainDIv