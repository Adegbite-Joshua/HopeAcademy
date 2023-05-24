import React from 'react'

const FileViewer = ({fileLink, fileType}) => {
  return (
    <>
        <div className='FileViewer'>
            {fileType.includes('.docx')?
            <>
                <object data="port.pdf" type="application/pdf" width="100%" height="100%">
                    <p>Alternative text - include a link <a href="port.pdf">to the PDF!</a></p>
                </object>
            </>: ''}
            {fileType.includes('.mp3')?
            <>
                <audio width="100%" height="100%" src="sound.mp3" controls></audio>
            </>: ''}
            {fileType.includes('.mp4')?
            <>
                <video className='w-full aspect-video' src="vid.mp4" controls></video>
            </>: ''}
        </div>
    </>
  )
}

export default FileViewer