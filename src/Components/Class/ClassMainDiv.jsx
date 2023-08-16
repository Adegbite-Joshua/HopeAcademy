import React , {useRef, useEffect, useState} from 'react'
import JoinedStudent from './JoinedStudent'

const ClassMainDiv = () => {
    const myVideo = useRef()
    
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({
            video: {mediaSource : "screen"},
            audio: true
        })
        .then( stream =>{
            // myVideo.current.srcObject = stream
            // myVideo.current.addEventListener('loadedmetadata', ()=>{
            //     myVideo.current.play()
            // })
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])

  return (
    <>
        <div className='DashboardMainDiv middleDiv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto overflow-hidden'>
            <video ref={myVideo}  className='w-full h-4/6 border-2 border-green-300'>
            </video>
            <div class='w-full h-2/6 flex shrink-0  border-2 border-red-300 overflow-auto gap-2'>
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                {/* <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent /> */}
            </div>
        </div>
    </>
  )
}

export default ClassMainDiv