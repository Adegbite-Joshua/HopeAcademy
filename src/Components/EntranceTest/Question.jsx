import React, { useState } from 'react';

const Question = ({ data , handleOptionChange}) => {
  const { question, options, correctAnswer } = data;
  

  return (
    <div className="mb-6">
      <p className="text-lg font-semibold">{question}</p>
      <div className="mt-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center mt-2">
            <input
              type="radio"
              id={`option${index}`}
              name="answer"
              value={index}
              checked={data.selectedAnswer&&data.selectedAnswer==index?true:false}
              onChange={() => handleOptionChange(index)}
              className="mr-2 accent-blue-500"
            />
            <label htmlFor={`option${index}`} className="cursor-pointer">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
