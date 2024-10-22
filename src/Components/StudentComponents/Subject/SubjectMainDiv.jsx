import React, { useEffect, useState } from 'react'
import ReceiverMessage from '../Inbox/ReceiverMessage'
import SenderMessage from '../Inbox/SenderMessage'
import ResultsDisplay from './ResultsDisplay'
import SubjectPerformance from './SubjectPerformance'
import './style.scss'
import SubjectResource from './SubjectResource'
import PerformanceContainer from './PerformanceContainer';
import ResourcesContainer from './ResourcesContainer';
import { useSelector } from 'react-redux';
import fetchClassTeachersComp from '../../../CustomHooks/StudentHooks/fetchClassTeachers'
import { subjects } from '../../../../constants/subjects'


const SubjectMainDiv = ({ func, subjectDetails }) => {
    let allStaffs = useSelector((state) => state.studentInformation.allStaffs);
    useEffect(() => {
        document.getElementById("subjectContainer").scrollTop = document.getElementById("subjectContainer").scrollHeight
    }, [])

    const [viewing, setviewing] = useState('Performance');
    const [studentResources, setstudentResources] = useState([]);
    const [classTeachers] = fetchClassTeachersComp();
    
    const setresources = (resources) => {
        setstudentResources(resources)
    }
    return (
        <>
            <div className='SubjectMainDivs basis-full md:basis-8/12 p-20 pt-4 md:pt-20 md:mt-10 overflow-auto'>
                <h3 className='top-0 text-center'>{subjects[Number(subjectDetails.subjectIndex)]}<span id='toggleIcon' onClick={func} className='float-right border-2 p-2 rounded-3'><i className='fa fa-bars'></i></span></h3>
                <div className='w-full flex justify-between px-4 mt-3'>
                    <a className='cursor-pointer' onClick={() => setviewing('Performance')}>C/A & Performance</a>
                    <a className='cursor-pointer' onClick={() => setviewing('Resources')}>Resources</a>
                </div>
                <div id='subjectContainer' className='subjectContainer w-full mt-3'>
                    {viewing === 'Performance' ? <PerformanceContainer subjectDetails={subjectDetails} /> : ''}
                    {viewing === 'Resources' ? <ResourcesContainer func={setresources} studentResources={studentResources} subjectDetails={subjectDetails} /> : ''}
                    {/* {viewing==='Class'?<ResourcesContainer/>:''} */}
                </div>
                {/* {document.getElementById("subjectContainer").onscroll = measure} */}
            </div>
        </>

    )
}

export default SubjectMainDiv