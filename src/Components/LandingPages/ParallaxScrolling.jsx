import React from 'react';

const ParallaxScrolling = () => {
  return (
    <div className="bg-fixed bg-cover bg-center h-96 relative flex items-center justify-center" style={{ backgroundImage: "url('/one.png')" }}>
      <h1 className="text-3xl text-black font-bold">HOPE Academy</h1>
    </div>
  );
};

export default ParallaxScrolling;
