import React from 'react';

const QuestionNav = ({ questionCount, currentQuestion, navigateToQuestion }) => {
  const questionNumbers = Array.from({ length: questionCount }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-center mt-4">
      {questionNumbers.map((number) => (
        <button
          key={number}
          className={`mx-1 my-1 px-3 py-1 rounded-full ${
            currentQuestion === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => navigateToQuestion(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default QuestionNav;
