import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { fetchStudentAcademicResults, setFetched } from '../../redux/studentInformation';


const fetchStudentAcademicResultsHook = () => {
    let studentInfo = useSelector((state) => state.studentInformation.studentInformation);
    let studentAcademicResults = useSelector((state) => state.studentInformation.studentAcademicResults);
    let fetching = useSelector((state) => state.studentInformation.studentFetchingState);
    let dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            if (Object.keys(studentInfo).length >= 1 && studentInfo.constructor === Object && Object.keys(studentAcademicResults).length === 0 && studentAcademicResults.constructor === Object) {
                console.log('fetchiong')
                let endpoint = 'http://localhost:7777/student/academic_results'
                let getStudentResults = await axios.post(endpoint, { id: studentInfo._id })
                console.table(getStudentResults)
                if (getStudentResults.status == 200) {
                    dispatch(fetchStudentAcademicResults(getTermDetails.data))
                }
            }
        }
        fetchData()
    }, [studentInfo])
    return [studentAcademicResults];
};

export default fetchStudentAcademicResultsHook;
