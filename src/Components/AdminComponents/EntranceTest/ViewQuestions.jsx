import React from 'react'
import Question from './Question'

const ViewQuestions = ({entranceQuestions}) => {
  
  return (
    <div>
        {entranceQuestions.length>=1?
          entranceQuestions.map((question)=>(
            <Question a={question.options[0]} b={question.options[1]} c={question.options[2]} d={question.options[3]} question={question.question} correctAnswer={question.correctAnswer} formType='view'/>
          )):<div className='flex justify-center items-center'>
                <h3 className='text-3xl '>You Have No Question Set For Entrance Exams</h3>
              </div>}
    </div>
  )
}

export default ViewQuestions