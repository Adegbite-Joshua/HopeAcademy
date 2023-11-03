import React , {useRef, useEffect, useState} from 'react'
import JoinedStudent from './JoinedStudent'
import Peer from 'peerjs';
import { useSelector, useDispatch } from 'react-redux'


const ClassMainDiv = ({startClass, endClass, setendClass}) => {
    const myVideo = document.getElementById('myVideo');
    const socket = useSelector((state) => state.socketIO.socket);
    const [myPeer, setMyPeer] = useState(null);
    const [startedClass, setstartedClass] = useState(false);
    const [joinedMembers, setjoinedMembers] = useState([]);
    let myPeer2 = {};

    useEffect(() => {    

        if (startClass && !startedClass) {
            setstartedClass(true);
            broadcastClass();
        }
        // if (endClass && myPeer2) {
        //     myPeer2 = null;
        //     setendClass(false);
        // }
        return () => {
            if (myPeer) {
                myPeer.destroy();
            }
            // socket.off('userConnected');
        };
    }, [startClass, endClass]);

    const broadcastClass = () => {
        // Start the class video
        const peer = new Peer(undefined, {
            host: 'localhost',
            port: 9999,
            path: '/peerjs',
        });
        
        peer.on('open', (id) => {
            console.log('Teacher ID: ', id);
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                myVideo.srcObject = stream;
                myVideo.muted = true;
                myVideo.onloadeddata = myVideo.play();
                socket.emit('userJoined', {userType: 'staff', userId: 'jkjwehuj', roomId: `class_video${0}${0}`})
                socket.on('userConnected', (details)=>{
                    connectToNewStudent(details.userId, stream)                    
                })
            })
            .catch((error) => {
                console.error('Error accessing media devices: ', error);
            });
        });
        setMyPeer(peer); 
        myPeer2 = peer;       
    };
    const connectToNewStudent =(studentId, stream) =>{
        const call = myPeer2.call(studentId, stream);
        setjoinedMembers(prevIds => [...prevIds, studentId]);
    }
  return (
    <>
        <div className='DashboardMainDiv middleDiv mt-16 md:mt-0 h-screen basis-full md:basis-7/12 px-5 overflow-y-auto overflow-hidden relative'>
            <video id='myVideo' className='w-full h-full border-2 border-green-300'>
            </video>
            {startedClass && <span className='absolute top-0 right-0 p-2 bg-blue-300'>Joined Students: {joinedMembers.length}</span>}
            {/* <div class='w-full h-1/6 md:h-2/6 flex shrink-0  border-2 border-red-300 overflow-auto gap-2'>
              <button onClick={broadcastClass}>click</button>
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
                <JoinedStudent />
            </div> */}
        </div>
    </>
  )
}

export default ClassMainDiv