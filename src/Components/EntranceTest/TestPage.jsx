import React, { useState, useEffect, useContext } from 'react';
import LandingPageNav from "../LandingPageNav";
import Question from './Question';
import Timer from './Timer';
import QuestionNav from './QuestionNav';
import axios from 'axios';


const questions = [
    {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'Which gas do plants use for photosynthesis?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the largest mammal on Earth?',
      options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'Which scientist developed the theory of general relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nicolaus Copernicus'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the process by which plants make their own food?',
      options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Transpiration'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
      options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element iron?',
      options: ['Fe', 'Ir', 'Io', 'In'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'Which animal is known as the "King of the Jungle"?',
      options: ['Lion', 'Tiger', 'Leopard', 'Cheetah'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'What is the process by which water changes from a liquid to a vapor?',
      options: ['Condensation', 'Evaporation', 'Freezing', 'Melting'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'Which gas is most abundant in Earth\'s atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element gold?',
      options: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Tokyo', 'Beijing', 'Seoul', 'Shanghai'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'Which instrument is used to measure atmospheric pressure?',
      options: ['Thermometer', 'Hygrometer', 'Barometer', 'Anemometer'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'Which layer of the Earth\'s atmosphere contains the ozone layer?',
      options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Exosphere'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element helium?',
      options: ['H', 'He', 'Hy', 'Hu'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'Which planet is known as the "Evening Star"?',
      options: ['Venus', 'Mars', 'Saturn', 'Jupiter'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'What is the study of plants called?',
      options: ['Zoology', 'Botany', 'Entomology', 'Ecology'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'Which gas is essential for respiration?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 3,
      selectedAnswer: null,
    },
    {
      question: 'Which gas gives fizzy drinks their bubbles?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'Which natural disaster is measured using the Richter scale?',
      options: ['Earthquake', 'Tornado', 'Hurricane', 'Volcanic Eruption'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the smallest planet in our solar system?',
      options: ['Earth', 'Mars', 'Mercury', 'Venus'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'Which gas is responsible for the greenhouse effect?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Methane'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the largest species of shark?',
      options: ['Great White Shark', 'Hammerhead Shark', 'Whale Shark', 'Tiger Shark'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'What is the process of a liquid changing into a gas called?',
      options: ['Melting', 'Freezing', 'Evaporation', 'Condensation'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'Which gas is used by plants during photosynthesis?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the largest land animal on Earth?',
      options: ['African Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element silver?',
      options: ['Ag', 'Au', 'Si', 'Sv'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'Which planet is known as the "Morning Star"?',
      options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element oxygen?',
      options: ['Ox', 'O', 'Om', 'Oy'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'Which gas is known as laughing gas?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Nitrous Oxide'],
      correctAnswer: 3,
      selectedAnswer: null,
    },
    {
      question: 'What is the process of plants releasing water vapor called?',
      options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Transpiration'],
      correctAnswer: 3,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element nitrogen?',
      options: ['N', 'Ni', 'Ne', 'Na'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element carbon?',
      options: ['C', 'Co', 'Ca', 'Ce'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'Which gas is responsible for the blue color of the sky?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'What is the process of ice changing directly into water vapor called?',
      options: ['Melting', 'Freezing', 'Evaporation', 'Sublimation'],
      correctAnswer: 3,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element sodium?',
      options: ['So', 'Sn', 'Sd', 'Na'],
      correctAnswer: 3,
      selectedAnswer: null,
    },
    {
      question: 'What is the study of rocks called?',
      options: ['Zoology', 'Geology', 'Botany', 'Entomology'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element potassium?',
      options: ['Po', 'Pt', 'K', 'P'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'What is the process of water changing from a gas to a liquid?',
      options: ['Condensation', 'Evaporation', 'Freezing', 'Melting'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'What is the study of birds called?',
      options: ['Zoology', 'Ornithology', 'Entomology', 'Ichthyology'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element copper?',
      options: ['Co', 'Cu', 'Cp', 'Cn'],
      correctAnswer: 1,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element calcium?',
      options: ['Ca', 'Ce', 'Co', 'Cn'],
      correctAnswer: 0,
      selectedAnswer: null,
    },
    {
      question: 'Which planet is known as the "Giant of the Solar System"?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'What is the study of insects called?',
      options: ['Zoology', 'Botany', 'Entomology', 'Ornithology'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element lead?',
      options: ['Le', 'Ld', 'Lo', 'Pb'],
      correctAnswer: 3,
      selectedAnswer: null,
    },
    {
      question: 'Which gas is known as the "Sunshine Vitamin"?',
      options: ['Oxygen', 'Carbon Dioxide', 'Vitamin C', 'Vitamin D'],
      correctAnswer: 3,
      selectedAnswer: null,
    },
    {
      question: 'What is the chemical symbol for the element sulfur?',
      options: ['Su', 'Sf', 'S', 'Sl'],
      correctAnswer: 2,
      selectedAnswer: null,
    },
    {
      question: 'What is the process by which plants lose water vapor through their leaves?',
      options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Transpiration'],
      correctAnswer: 3,
      selectedAnswer: null,
    },
];
  
  

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [remainingTime, setremainingTime] = useState({minutes:15, seconds: 20})
  
  const [targetTime, setTargetTime] = useState(new Date()); // Set your target time here
  const [timeLeft, setTimeLeft] = useState(0);
  const studentDetails = JSON.parse(sessionStorage.getItem('entrance_test_login'))
  

  useEffect(() => {
    // startCountDown()
    
  }, []);

  const startCountDown =()=>{
    const startTime = parseInt(localStorage.getItem('startingTime'))
    const countDownInterval = setInterval(() => {
      const currentTime = Date.now();
      const timeElapsed = Math.floor((currentTime-startTime)/1000)
      const remainingTime = 900 - timeElapsed;
      ;
      if (remainingTime <= 0) {
        clearInterval(countDownInterval);
        window.location.href = '/'
      } else{
        const minutes = Math.floor(remainingTime/60)
        const seconds = remainingTime%60;
        setremainingTime({minutes, seconds})
        if (minutes==0 && seconds<=30) {
          alert('30 seconds left')
        }
      }
    }, 1000);
  }


  const nextQuestion = () => {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(prevQuestion => prevQuestion - 1);
  };

  const navigateToQuestion = (questionNumber) => {
    setCurrentQuestion(questionNumber - 1);
  };

  const handleOptionChange = (answerIndex) => {
    questions[currentQuestion].selectedAnswer = answerIndex;
    let values = {
      currentQuestion,
      // questionNumber: 
      studentEmail: studentDetails.email,
      selectedAnswer: answerIndex
    }
    let endpoint = 'http://localhost:7777/student/select_answer'
      axios.post(endpoint, values)
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
      })
  };

  return (
    <>  
        <LandingPageNav />
        <div className="max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Test Page</h2>

        <Question data={questions[currentQuestion]} handleOptionChange={handleOptionChange}  />

        <div className="flex flex-row justify-between mt-4">
            {currentQuestion > 0 && (
            <button className="px-4 py-2 text-base bg-blue-500 text-white rounded cursor-pointer transition duration-300 hover:bg-blue-600" onClick={prevQuestion}>Previous</button>
            )}

            <div className="text-lg font-semibold">Question {currentQuestion + 1}</div>

            {currentQuestion < questions.length - 1 && (
            <button className="px-4 py-2 text-base bg-blue-500 text-white rounded cursor-pointer transition duration-300 hover:bg-blue-600" onClick={nextQuestion}
            >
                Next
            </button>
            )}
        </div>

        <Timer remainingTime={remainingTime} />

        <button className="mt-4 px-6 py-3 text-base bg-green-500 text-white rounded cursor-pointer transition duration-300 hover:bg-green-600">Submit</button>
        <QuestionNav questionCount={questions.length} currentQuestion={currentQuestion + 1}  navigateToQuestion={navigateToQuestion} />
        
        </div>
    </>
  );
};

export default TestPage;
