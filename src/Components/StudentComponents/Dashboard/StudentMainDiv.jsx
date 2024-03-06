import React from 'react'
import { Link } from 'react-router-dom'
import Announcement from './Announcement'
import SubjectDiv from './SubjectDiv'
import { useSelector } from 'react-redux'
import fetchStudentInfo from '../../../CustomHooks/StudentHooks/fetchStudentInfo'
import { subjects } from '../../../../constants/subjects'
import FetchNoticesAndNews from '../../../CustomHooks/FetchNoticesAndNews'
import Notice from "./Notice";
import News from "./News";

const StudentMainDiv = ({ welcomeNote }) => {
    const [studentInfo, fetching, termDetails] = fetchStudentInfo();  
    const [noticesAndNews] = FetchNoticesAndNews();  
    let studentSubject = [];
    let extractedNewAndNotices;
    if (!fetching) {
        studentInfo ? studentInfo.subjects.map((subject, index) => {
            if (index <= 5) {
                studentSubject.push(subject.subjectIndex)
            } else {
                return
            }
        }) : ''
        extractedNewAndNotices = noticesAndNews ? noticesAndNews.filter((annouce, index) => index <= 5) : ''
    }
    let term = [
        '1st Term',
        '2nd Term',
        '3rd Term'
    ]

    return (
        <>
            <div className="StudentMainDiv p-4">
                <div className="w-3/4 mx-auto bg-white shadow-lg rounded-lg p-4">
                    <p className="text-xl font-semibold mb-4">Hi {studentInfo.firstName} {welcomeNote}</p>
                    <p className="mb-4">Matric Number: {studentInfo.entranceTest.score !== '' && studentInfo.entranceTest.score !== undefined ? studentInfo.matricNumber : (<span className='text-red-600'>You need to take your entrance test</span>)}</p>
                    {studentInfo.entranceTest.score === '' || studentInfo.entranceTest.score === undefined ?
                        <Link to='/entrance_test' className="w-full md:w-3/6 bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 mb-2 hover:bg-yellow-600">Take Entrance Test</Link>
                        : ''}
                    <Link to='/student/profile' className=" w-24 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Profile</Link>
                    <p>Term: {term[termDetails.term-1]} | Session Year: {termDetails.year}</p>
                </div>
                <div className="w-full p-2 mt-4">
                    <h4 className="text-lg font-semibold ms-4 mb-2">Your Subjects <Link className="float-right me-4 text-blue-500" to='/student/subjects'>See All</Link></h4>
                    <div className="flex flex-wrap items-center justify-start subjectsDiv">
                        {studentSubject ? studentSubject.map((subject, index) => (
                            <SubjectDiv key={index} subject={subjects[subject]} />
                        )) : ''}
                    </div>
                </div>
                <div className="announcementDiv mt-4">
                    <h3 className="text-xl font-semibold mb-2">Notices And News</h3>
                    {/* <Link className="float-right text-blue-500" to='/student/notices_and_news'>See All</Link> */}
                    {!fetching ? extractedNewAndNotices.length > 0 ? extractedNewAndNotices.map((value, index) => (
                        value.type=='news'?<News key={index} data={value}/>:<Notice key={index} data={value}/>
                    )) : (<News data={{head: 'Empty', type: 'blog', body: 'No News Or Notice Here Yet'}}/>) : ''}
                </div>
            </div>
        </>

    )
}

export default StudentMainDiv