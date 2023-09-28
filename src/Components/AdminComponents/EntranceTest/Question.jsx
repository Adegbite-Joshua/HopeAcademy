import React, {useState} from 'react'

const Question = ({type}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
  return (
    <div>
        <p>Question Text</p>
        <input type="text" className='h-12 p-2 border-2 border-blue-400 w-full mb-1' name="" id="" />
        <div className='ps-10 flex'>
            <div className='p-2 flex flex-col gap-5'>
                <input type="radio" name="option" onChange={handleChange} value={0} checked={selectedOption==0}  className=' checked:accent-green-400 border-2 checked:border-green-400 checked:outline-green-400 bg-red-500 accent-red-500 border-2 outline-red-500' id="" />
                <input type="radio" name="option" onChange={handleChange} value={1} checked={selectedOption==1}  className=' checked:accent-green-400 border-2 checked:border-green-400 checked:outline-green-400 bg-red-500 accent-red-500 border-2 outline-red-500' id="" />
                <input type="radio" name="option" onChange={handleChange} value={2} checked={selectedOption==2}  className=' checked:accent-green-400 border-2 checked:border-green-400 checked:outline-green-400 bg-red-500 accent-red-500 border-2 outline-red-500' id="" />
                <input type="radio" name="option" onChange={handleChange} value={3} checked={selectedOption==3}  className=' checked:accent-green-400 border-2 checked:border-green-400 checked:outline-green-400 bg-red-500 accent-red-500 border-2 outline-red-500' id="" />
            </div>
            <div>
                <input type="text" className=' h-7 mb-1 p-2 border-2 border-blue-400 w-full' placeholder='Option A' />
                <input type="text" className=' h-7 mb-1 p-2 border-2 border-blue-400 w-full' placeholder='Option B' />
                <input type="text" className=' h-7 mb-1 p-2 border-2 border-blue-400 w-full' placeholder='Option C' />
                <input type="text" className=' h-7 mb-1 p-2 border-2 border-blue-400 w-full' placeholder='Option D' />
            </div>
        </div>
        <div className='flex'><button className='bg-blue-400 p-2 ms-auto rounded-lg'>Add Question</button></div>
    </div>
  )
}

export default Question