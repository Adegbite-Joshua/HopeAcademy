import React from 'react';

const QuestionNav = ({ questionCount, currentQuestion, navigateToQuestion }) => {
  const questionNumbers = Array.from({ length: questionCount }, (_, index) => index + 1);

  return (
    <div className="max-w-sm ms-auto me-10 grid grid-cols-5 justify-center mt-4">
      {questionNumbers.map((number) => (
        <button
          key={number}
          className={`mx-1 my-1 p-2 rounded ${
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
