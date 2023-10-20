import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Result from './Result'
// import { renderToStaticMarkup } from 'react-dom/server';
// import { PDFViewer } from '@react-pdf-viewer/react-to-pdf';
// import jsPDF from 'jspdf';

const ResultsMainDiv = ({resultshhh}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [staffInfo, setstaffInfo] = useState(useSelector((state)=>state.staffInformation.staffInformation))
  let staffInfo = useSelector((state)=>state.staffInformation.staffInformation)
  
  const school = {
    logoUrl: '/vite.svg',
    name: 'HOPE Academy',
    address: '123 School Street, Cityville, State, 12345',
    contactNumber: '123-456-7890',
  };

  const student = {
    name: 'John Doe',
    matricNumber: 'HOPE123456',
    className: 'JSS 1',
  };

  const results = [
    { term: '2023CjssoneT1', ca: 24, exam: 67, subject: 'Mathematics' },
    { term: '2023CjssoneT2', ca: 22, exam: 50, subject: 'English Language' },
    { term: '2023CjssoneT1', ca: 24, exam: 67, subject: 'Mathematics' },
    { term: '2023CjssoneT2', ca: 22, exam: 50, subject: 'English' },
    { term: '2023CjssoneT1', ca: 24, exam: 67, subject: 'Mathematics' },
    { term: '2023CjssoneT2', ca: 22, exam: 50, subject: 'English' },
    { term: '2023CjssoneT1', ca: 24, exam: 67, subject: 'Mathematics' },
    { term: '2023CjssoneT2', ca: 22, exam: 50, subject: 'English' },
    { term: '2023CjssoneT1', ca: 24, exam: 67, subject: 'Mathematics' },
    { term: '2023CjssoneT2', ca: 22, exam: 50, subject: 'English' },
    { term: '2023CjssoneT1', ca: 24, exam: 67, subject: 'Mathematics' },
    { term: '2023CjssoneT2', ca: 22, exam: 50, subject: 'English' },
    { term: '2023CjssoneT1', ca: 24, exam: 67, subject: 'Mathematics' },
  ];

//   const generatePdf = () => {
//   const pdf = new jsPDF();
//   const pdfContent = renderToStaticMarkup(<StudentInfoTable /* Pass your props here */ />);
//   pdf.fromHTML(pdfContent, 15, 15);
//   pdf.save('student_info.pdf');
// };
  return (
    <>
        <div className='DashboardMainDiv relative order-5 md:order-none mt-16 md:mt-0 h-screen basis-full md:basis-7/12 p-5 overflow-y-auto'>
            {/* <button onClick={generatePdf} className=' print:hidden sticky top-2 left-full bg-blue-200 p-2 rounded-md'>Download Result</button> */}
            <Result results={results} studentName={student.name} matricNumber={student.matricNumber} className={student.className} schoolName={school.name} address={school.address} contactNumber={school.contactNumber} logoUrl={school.logoUrl}/>
            {/* {results?.length> 0? results.map((notification)=>(
                // <Notification id={notification.senderId} name={notification.name} message={notification.message} type={notification.type || 'submit'}/>
            )): <Notification name='Empty Notification' message='You do not have any notification at the moment' type='empty'/>} */}
        </div>
    </>
  )
}

export default ResultsMainDiv