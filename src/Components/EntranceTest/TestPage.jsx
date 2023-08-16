import React, { useState, useEffect } from 'react';
import LandingPageNav from "../LandingPageNav";
import Question from './Question';
import Timer from './Timer';
import QuestionNav from './QuestionNav';

const data = [
    {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      correctAnswer: 2,
    },
    {
      question: 'Which gas do plants use for photosynthesis?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 1,
    },
    {
      question: 'What is the largest mammal on Earth?',
      options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 1,
    },
    {
      question: 'Which scientist developed the theory of general relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nicolaus Copernicus'],
      correctAnswer: 1,
    },
    {
      question: 'What is the process by which plants make their own food?',
      options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Transpiration'],
      correctAnswer: 0,
    },
    // Continue adding more questions here
  ];  

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [remainingTime, setRemainingTime] = useState(15 * 60);
  

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [remainingTime]);

  const nextQuestion = () => {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(prevQuestion => prevQuestion - 1);
  };

  const navigateToQuestion = (questionNumber) => {
    setCurrentQuestion(questionNumber - 1); // Subtract 1 to match array index
  };

  return (
    <>  
        <LandingPageNav />
        <div className="max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Test Page</h2>

        <Question data={data[currentQuestion]} />

        <div className="flex justify-between mt-4">
            {currentQuestion > 0 && (
            <button
                className="px-4 py-2 text-base bg-blue-500 text-white rounded cursor-pointer transition duration-300 hover:bg-blue-600"
                onClick={prevQuestion}
            >
                Previous
            </button>
            )}

            <div className="text-lg font-semibold">Question {currentQuestion + 1}</div>

            {currentQuestion < data.length - 1 && (
            <button
                className="px-4 py-2 text-base bg-blue-500 text-white rounded cursor-pointer transition duration-300 hover:bg-blue-600"
                onClick={nextQuestion}
            >
                Next
            </button>
            )}
        </div>

        <Timer remainingTime={remainingTime} />

        <button className="mt-4 px-6 py-3 text-base bg-green-500 text-white rounded cursor-pointer transition duration-300 hover:bg-green-600">Submit</button>
        </div>
        <QuestionNav
        questionCount={data.length}
        currentQuestion={currentQuestion + 1} // Add 1 to match question number
        navigateToQuestion={navigateToQuestion}
      />
    </>
  );
};

export default TestPage;
