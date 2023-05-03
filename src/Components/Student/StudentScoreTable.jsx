import React from 'react'

const StudentScoreTable = () => {
  return (
    <>
        <table className=' w-full'>
            <thead className=' w-full'>
                <tr className=' w-full'>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>C/A</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>ASS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>TEST</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>TEST</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>TEST</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>BONUS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>BONUS</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>TOTAL</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>PERCENT</td>
                    <td className=' h-11 w-11 text-center m-1 border border-2 p-1'>POSITION</td>
                </tr>
            </thead>
            <tbody id='result'>
            <tr>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
                <td className=' h-11 w-11 text-center m-1 border border-2 p-1'><input type="number" placeholder='00' className=' w-full h-full focus:outline-0 focus:ring-2 focus:ring-blue-600 rounded-md text-center' max={5} min={0} name="" id="" /></td>
            </tr>
        </tbody>
        </table>
    </>
  )
}

export default StudentScoreTable