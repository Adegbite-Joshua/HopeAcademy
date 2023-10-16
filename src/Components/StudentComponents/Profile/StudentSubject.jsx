import React from 'react'
import { useSelector } from 'react-redux';
import subjects from '../../subjectArray';
import Subject from './Subject'


const StudentSubject = () => {
    // document.querySelector("title").innerText = `404 - Error Page`
    let studentInfo = useSelector((state) => state.studentInformation.studentInformation);
    return (
        <>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mx-auto">
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Subjects You Are Offering</h3>
                    <select
                        disabled
                        name=""
                        id=""
                        multiple
                        className="form-select h-40 overflow-y-auto border rounded-md p-2"
                    >
                        {studentInfo.subjects.map((subject, index) => (
                            <Subject key={index} name={subjects[subject.subjectIndex]} />
                        ))}
                    </select>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Unoffered Subjects</h3>
                    <select
                        disabled
                        name=""
                        id=""
                        multiple
                        className="form-select h-40 overflow-y-auto border rounded-md p-2"
                    >
                        {subjects.map((unaddedSubject, index) => {
                            if (!studentInfo.subjects.includes(unaddedSubject)) {
                                return <Subject key={index} name={unaddedSubject} />;
                            }
                            return null;
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}

export default StudentSubject