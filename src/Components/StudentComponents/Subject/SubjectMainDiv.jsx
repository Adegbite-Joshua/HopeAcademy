import React, { useEffect, useState } from 'react'
import ReceiverMessage from '../Inbox/ReceiverMessage'
import SenderMessage from '../Inbox/SenderMessage'
import ResultsDisplay from './ResultsDisplay'
import SubjectPerformance from './SubjectPerformance'
import './style.scss'
import SubjectResource from './SubjectResource'
import PerformanceContainer from './PerformanceContainer';
import ResourcesContainer from './ResourcesCOntainer';
import { useSelector } from 'react-redux';


const SubjectMainDiv = ({ func, subjectIndex }) => {
    let allStaffs = useSelector((state) => state.studentInformation.allStaffs);
    useEffect(() => {
        console.log(document.getElementById("subjectContainer").scrollHeight)
        document.getElementById("subjectContainer").scrollTop = document.getElementById("subjectContainer").scrollHeight
    }, [])

    const [viewing, setviewing] = useState('Performance')
    const [studentResources, setstudentResources] = useState([])

    // const measure =()=>{
    //     // document.getElementById("subjectContainer").scrollTop = document.getElementById("subjectContainer").scrollHeight
    //     // console.log(document.getElementById("subjectContainer").scrollBottom)
    //     // console.log(document.getElementById("subjectContainer").scrollHeight)
    // }
    // subjectContainer.scrollTop = subjectContainer.scrollHeight;
    const setresources = (resources) => {
        setstudentResources(resources)
    }
    return (
        <>
            <div className='SubjectMainDiv p-20 mt-10 overflow-auto'>
                <h3 className='top-0 text-center'>{subjectIndex ? allStaffs[subjectIndex].subjectInfo.subjectName : ''}<span id='toggleIcon' onClick={func} className='float-right border border-2 p-2 rounded-3'><i className='fas fa-bars'></i></span></h3>
                <div className='w-full flex justify-between px-4 mt-3'>
                    <a className='cursor-pointer' onClick={() => setviewing('Performance')}>C/A & Performance</a>
                    <a className='cursor-pointer' onClick={() => setviewing('Resources')}>Resources</a>
                    <a>Class</a>
                </div>
                <div id='subjectContainer' className='subjectContainer w-full mt-3'>
                    {viewing === 'Performance' ? <PerformanceContainer subjectIndex={subjectIndex} /> : ''}
                    {viewing === 'Resources' ? <ResourcesContainer func={setresources} studentResources={studentResources} subjectIndex={subjectIndex} /> : ''}
                    {/* {viewing==='Class'?<ResourcesContainer/>:''} */}
                </div>
                {/* {document.getElementById("subjectContainer").onscroll = measure} */}
            </div>
        </>

    )
}

export default SubjectMainDiv