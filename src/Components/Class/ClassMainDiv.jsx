import React , {useRef, useEffect, useState} from 'react'


const ClassMainDiv = () => {
    const myVideo = useRef()
    
    useEffect(()=>{
        console.log(myVideo)
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        .then( stream =>{
            // myVideo.current.srcObject = stream
            // myVideo.current.addEventListener('loadedmetadata', ()=>{
            //     myVideo.current.play()
            // })
        })
        .catch(error=>{
            // console.log(error)
            // alert(error)
            // alert('error')
        })
    }, [])

  return (
    <>
        <div className='DashboardMainDiv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto overflow-hidden'>
            <video ref={myVideo} src='vid.mp4' muted autoPlay controls loop  className='w-full h-full border-2 border-green-300'>
            </video>
        </div>
    </>
  )
}

export default ClassMainDiv