import React from 'react'
import Question from './Question'

const ViewQuestions = () => {
  return (
    <div>
        <Question a='Yellow' b='Red' c='Green' d='Tree' question='Which of these is not a color?' selected={4} formType='view'/>
        <Question a='Yellow' b='Red' c='Green' d='Tree' question='Which of these is not a color?' selected={4} formType='view'/>
        <Question a='Yellow' b='Red' c='Green' d='Tree' question='Which of these is not a color?' selected={4} formType='view'/>
        <Question a='Yellow' b='Red' c='Green' d='Tree' question='Which of these is not a color?' selected={4} formType='view'/>
    </div>
  )
}

export default ViewQuestions