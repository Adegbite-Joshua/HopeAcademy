import React, { useState, useEffect } from 'react';
import Notice from '../../src/Components/AdminComponents/NoticesAndNews/Notice';
import News from '../../src/Components/AdminComponents/NoticesAndNews/News';
import Form from '../../src/Components/AdminComponents/NoticesAndNews/Form';
import NavBar from '../../src/Components/AdminComponents/NavBar/NavBar';
import PopUp from '../../src/Components/PopUp';
import FetchAdminInfo from '../../src/CustomHooks/AdminHooks/FetchAdminInfo';
import FetchAllStudentsAndStaffs from '../../src/CustomHooks/AdminHooks/FetchAllStudentsAndStaffs';




const AdminNoticesAndNews = () => {
    const [studentCount, setStudentCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);
    const [viewingIndex, setviewingIndex] = useState(0);
    // const [adminInfo, fetching] = FetchAdminInfo();
    // const [allStudents, allStaffs] = FetchAllStudentsAndStaffs();

    useEffect(() => {
        
    }, []);


    const [isOpen, setIsOpen] = useState(false);

    const openPopup = (index = null) => {
        setIsOpen(true);
        index?setviewingIndex(index):''
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className=''>
                <NavBar/>
                <div className='flex'><button onClick={openPopup} className='bg-blue-500 p-2 my-2 rounded-md ms-auto me-4'>+ Create</button></div>
                <div className='container p-2 mx-auto'>
                    <Notice data={{head: 'Head', type: 'blog', body: 'iuewfniu kwq jf k afh h khahkjf hf hhakfkifh  f ja fhieauu  wk kjsiufuih e jfhkaia;o iuu u  ououfu  klak  kj sjk djjdfuiou uiusl;jk'}}/>
                    <News data={{head: 'Head', type: 'blog', body: 'iuewfniu kwq jf k afh h khahkjf hf hhakfkifh  f ja fhieauu  wk kjsiufuih e jfhkaia;o iuu u  ououfu  klak  kj sjk djjdfuiou uiusl;jk'}}/>
                    <Notice data={{head: 'Head', type: 'blog', body: 'iuewfniu kwq jf k afh h khahkjf hf hhakfkifh  f ja fhieauu  wk kjsiufuih e jfhkaia;o iuu u  ououfu  klak  kj sjk djjdfuiou uiusl;jk'}}/>
                    <News data={{head: 'Head', type: 'blog', body: 'iuewfniu kwq jf k afh h khahkjf hf hhakfkifh  f ja fhieauu  wk kjsiufuih e jfhkaia;o iuu u  ououfu  klak  kj sjk djjdfuiou uiusl;jk'}}/>
                    <Notice data={{head: 'Head', type: 'blog', body: 'iuewfniu kwq jf k afh h khahkjf hf hhakfkifh  f ja fhieauu  wk kjsiufuih e jfhkaia;o iuu u  ououfu  klak  kj sjk djjdfuiou uiusl;jk'}}/>
                </div>
            </div>
            <PopUp isOpen={isOpen} onClose={closePopup}>
                <Form type='add' data={{head: 'Head', type: 'blog', body: 'iuewfniu kwq jf k afh h khahkjf hf hhakfkifh  f ja fhieauu  wk kjsiufuih e jfhkaia;o iuu u  ououfu  klak  kj sjk djjdfuiou uiusl;jk'}} />
            </PopUp>
        </>
    );
}

export default AdminNoticesAndNews;
