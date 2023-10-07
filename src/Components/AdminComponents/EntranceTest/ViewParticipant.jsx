import React from 'react'
import Participant from './Participant'

const ViewParticipant = () => {
    const currentDate = new Date();
  this.year = currentDate.getFullYear();

  return (
    <div className='w-full overflow-x-auto'>
        <form action="w-full">
            <label htmlFor="" className='w-full'>Select Participants Year</label>
            <select name="" id="" className='w-full border-2 border-blue-400 p-2 focus:border-blue-400 focus:outline-blue-400'>
                <option value="">2023</option>
                <option value="">2022</option>
                <option value="">2021</option>
                <option value="">2020</option>
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