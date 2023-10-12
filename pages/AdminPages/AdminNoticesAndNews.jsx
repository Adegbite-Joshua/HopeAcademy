import React, { useState, useEffect } from 'react';
import Notice from '../../src/Components/AdminComponents/NoticesAndNews/Notice';
import News from '../../src/Components/AdminComponents/NoticesAndNews/News';
import NavBar from '../../src/Components/AdminComponents/NavBar/NavBar';
import FetchAdminInfo from '../../src/CustomHooks/AdminHooks/FetchAdminInfo';
import FetchAllStudentsAndStaffs from '../../src/CustomHooks/AdminHooks/FetchAllStudentsAndStaffs';

const AdminNoticesAndNews = () => {
    const [studentCount, setStudentCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);
    const [adminInfo, fetching] = FetchAdminInfo();
    const [allStudents, allStaffs] = FetchAllStudentsAndStaffs();

    useEffect(() => {
        setTimeout(() => {
            setStudentCount(150); 
            setStaffCount(25);    
        }, 1000);
    }, []);


    const [isOpen, setIsOpen] = useState(false);

    const openPopup = (index) => {
        setIsOpen(true);
        setviewingIndex(index)
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className=''>
                <NavBar/>
                <div className='flex'><button className='bg-blue-500 p-2 my-2 rounded-md ms-auto me-4'>+ Create</button></div>
                <div className='container p-2 mx-auto'>
                    <Notice/>
                    <News/>
                    <Notice/>
                    <News/>
                    <Notice/>
                </div>
            </div>
            {/* <PopUp isOpen={isOpen} onClose={closePopup}>
                <Form type='edit' data={staffs[viewingIndex]} />
            </PopUp> */}
        </>
    );
}

export default AdminNoticesAndNews;
