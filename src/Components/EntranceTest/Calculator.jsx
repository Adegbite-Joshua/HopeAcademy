import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="w-72 mt-4 p-4 border rounded shadow-md">
      <input
        type="text"
        value={input}
        className="w-full p-2 mb-2 text-lg rounded border"
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('7')}>7</button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('8')}>8</button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('9')}>9</button>
        <button className="p-2 bg-blue-400 hover:bg-blue-500 text-white text-center" onClick={() => handleButtonClick('+')}>+</button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('4')}>4</button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('5')}>5</button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('6')}>6</button>
        <button className="p-2 bg-blue-400 hover:bg-blue-500 text-white text-center" onClick={() => handleButtonClick('-')}>-</button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('1')}>1</button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('2')}>2</button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('3')}>3</button>
        <button className="p-2 bg-blue-400 hover:bg-blue-500 text-white text-center" onClick={() => handleButtonClick('*')}>*</button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 text-center" onClick={() => handleButtonClick('0')}>0</button>
        <button className="p-2 bg-blue-400 hover:bg-blue-500 text-white text-center" onClick={() => handleButtonClick('/')}>/</button>
        <button className="p-2 bg-blue-400 hover:bg-blue-500 text-white text-center" onClick={handleCalculate}>=</button>
        <button className="p-2 bg-red-400 hover:bg-red-500 text-white text-center col-span-2" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
