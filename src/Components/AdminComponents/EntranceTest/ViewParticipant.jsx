import React from 'react'
import Participant from './Participant'

const ViewParticipant = () => {
    const currentYear = new Date().getFullYear();
    let yearsLength = currentYear-2004;
    const years = Array.from(new Array(yearsLength), (_, index) => currentYear - index);


  return (
    <div className='w-full overflow-x-auto'>
        <form action="w-full">
            <label htmlFor="" className='w-full'>Select Participants Year</label>
            <select name="" id="" onChange={(e)=>console.log(e.target.value)} className='w-full border-2 border-blue-400 p-2 focus:border-blue-400 focus:outline-blue-400'>
            {years.map((year) => (
                <option key={year} value={year}>
                {year}
                </option>
            ))}
            </select>
        </form>
        <table className='w-full overflow-y-auto'>
            <caption>2023 Participants</caption>
            <thead className='w-full'>
                <tr className='w-full'>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Status</td>
                    <td>Score</td>
                </tr>
            </thead>
            <tbody className='w-full p-2'>
                <Participant name='Ade Kola jj' email='ade@gmail.com' status={true} score={20} />
                <Participant name='Ade Kola jj' email='ade@gmail.com' status={true} score={20} />
                <Participant name='Ade Kola jj' email='ade@gmail.com' status={false} score={20} />
                <Participant name='Ade Kola jj' email='ade@gmail.com' status={true} score={20} />
                <Participant name='Ade Kola jj' email='ade@gmail.com' status={false} score={20} />
            </tbody>
        </table>
    </div>
  )
}

export default ViewParticipant