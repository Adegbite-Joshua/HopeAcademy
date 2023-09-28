import React, {useState, useEffect} from 'react'

const Question = ({formType, a, b, c, d, question, selected}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [editOption, seteditOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [questionValue, setquestionValue] = useState('')
    const [optionA, setoptionA] = useState('')
    const [optionB, setoptionB] = useState('')
    const [optionC, setoptionC] = useState('')
    const [optionD, setoptionD] = useState('')
    let localOption = editOption;

    useEffect(() => {
        editOption==''?seteditOption(formType):'';
        if (localOption!='add') {
            setoptionA(a)
            setoptionB(b)
            setoptionC(c)
            setoptionD(d)
            setSelectedOption(selected)
            setquestionValue(question)
        }
    }, [editOption])
    
    const handleSubmit =()=>{
        if (formType=='view') {
            seteditOption('update')
            localOption='update'
        }
    }

  return (
    <div>
        <p>Question Text</p>
        <input disabled={editOption=='view'} type="text" value={questionValue} className='h-12 p-2 border-2 border-blue-400 w-full mb-1' name="" id="" />
        <div className='ps-10 flex'>
            <div className='p-2 flex flex-col gap-5'>
                <input disabled={editOption=='view'} type="radio" name="option" onChange={handleChange} value={0} checked={selectedOption==0}  className=' checked:accent-green-400 border-2 checked:border-green-400 checked:outline-green-400 bg-red-500 accent-red-500 border-2 outline-red-500' id="" />
                <input disabled={editOption=='view'} type="radio" name="option" onChange={handleChange} value={1} checked={selectedOption==1}  className=' checked:accent-green-400 border-2 checked:border-green-400 checked:outline-green-400 bg-red-500 accent-red-500 border-2 outline-red-500' id="" />
                <input disabled={editOption=='view'} type="radio" name="option" onChange={handleChange} value={2} checked={selectedOption==2}  className=' checked:accent-green-400 border-2 checked:border-green-400 checked:outline-green-400 bg-red-500 accent-red-500 border-2 outline-red-500' id="" />
                <input disabled={editOption=='view'} type="radio" name="option" onChange={handleChange} value={3} checked={selectedOption==3}  className=' checked:accent-green-400 border-2 checked:border-green-400 checked:outline-green-400 bg-red-500 accent-red-500 border-2 outline-red-500' id="" />
            </div>
            <div>
                <input disabled={editOption=='view'} value={optionA} type="text" className=' h-7 mb-1 p-2 border-2 border-blue-400 w-full' placeholder='Option A' />
                <input disabled={editOption=='view'} value={optionB} type="text" className=' h-7 mb-1 p-2 border-2 border-blue-400 w-full' placeholder='Option B' />
                <input disabled={editOption=='view'} value={optionC} type="text" className=' h-7 mb-1 p-2 border-2 border-blue-400 w-full' placeholder='Option C' />
                <input disabled={editOption=='view'} value={optionD} type="text" className=' h-7 mb-1 p-2 border-2 border-blue-400 w-full' placeholder='Option D' />
            </div>
        </div>
        <div onClick={handleSubmit} className='flex'><button className='bg-blue-400 p-2 ms-auto rounded-lg'>{editOption=='add'?'Add Question':editOption=='update'?'Update Question':'Edit'}</button></div>
    </div>
  )
}

export default Question