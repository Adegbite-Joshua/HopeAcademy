import React from 'react'
import { Link } from 'react-router-dom'
import Announcement from './Announcement'
import SubjectDiv from './SubjectDiv'
import { useSelector } from 'react-redux'

const StudentMainDiv = ({ welcomeNote }) => {
    const subjects = [
        'MATHEMATICS',
        'ENGLISH LANGUAGE',
        'YORUBA',
        'CIVIC EDUCATION',
        'COMPUTER STUDIES',
        'GEOGRAPHY',
        'ECONOMICS',
        'PHYSICS',
        'CHEMISTRY',
        'BIOLOGY',
        'ANIMAL HUSBANDRY',
        'FURTHER MATHEMATICS',
        'TECHNICAL DRAWING'
    ]
    let studentInfo = useSelector((state) => state.studentInformation.studentInformation);
    let fetching = useSelector((state) => state.staffFetchingState)
    let studentSubject = [];
    let announcement;
    if (!fetching) {
        studentInfo ? studentInfo.subjects.map((subject, index) => {
            if (index <= 2) {
                studentSubject.push(subject.subjectIndex)
            } else {
                return
            }
        }) : ''
        // console.log(studentSubject)
        announcement = studentInfo ? studentInfo.announcements.filter((annouce, index) => index <= 3) : ''
    }
    return (
        <>
            <div className="StudentMainDiv p-4">
                <div className="w-3/4 mx-auto bg-white shadow-lg rounded-lg p-4">
                    <p className="text-xl font-semibold mb-4">Hi {studentInfo.firstName} {welcomeNote}</p>
                    <p className="mb-4">Matric Number: {studentInfo.entranceTest.score !== '' || studentInfo.entranceTest.score !== undefined ? studentInfo.matricNumber : 'You need to take your entrance test'}</p>
                    {studentInfo.entranceTest.score === '' || studentInfo.entranceTest.score === undefined ?
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 mb-2 hover:bg-yellow-600">Take Entrance Test</button>
                        : ''}
                    <Link to='/student/profile' className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Profile</Link>
                </div>
                <div className="w-full p-2 mt-4">
                    <h4 className="text-lg font-semibold ms-4 mb-2">Your Subjects <Link className="float-right me-4 text-blue-500" to='/subjects'>See All</Link></h4>
                    <div className="flex flex-wrap items-center justify-start subjectsDiv">
                        {studentSubject ? studentSubject.map((subject, index) => (
                            <SubjectDiv key={index} subject={subjects[subject]} />
                        )) : ''}
                    </div>
                </div>
                <div className="announcementDiv mt-4">
                    <h3 className="text-xl font-semibold mb-2">Announcements <Link className="float-right text-blue-500" to='/announcement'>See All</Link></h3>
                    {fetching ? announcement.length > 0 ? announcement.map((annouce, index) => (
                        <Announcement key={index} announce={annouce.announcement} />
                    )) : <Announcement announce='You have no announcement at the moment' /> : ''}
                </div>
            </div>
        </>

    )
}

export default StudentMainDiv