import React from 'react';

const Timer = ({ remainingTime }) => {
  let { minutes, seconds } = remainingTime;
  return (
    <div className="mt-4 text-xl font-semibold">
      Remaining Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
