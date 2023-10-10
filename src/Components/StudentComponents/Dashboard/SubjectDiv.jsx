import React from 'react'

const SubjectDiv = ({ subject }) => {
    return (
        <>
            <div className='text-center bg-gray-100 shadow-lg rounded-lg p-2'>
                <h4 className="font-semibold">{subject}</h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
                <img src="/vite.svg" className="h-8 w-8 mx-auto mt-2" alt="" />
            </div>
        </>

    )
}

export default SubjectDiv