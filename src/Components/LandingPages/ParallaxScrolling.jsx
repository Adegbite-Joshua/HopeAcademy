import React from 'react';

const ParallaxScrolling = () => {
  return (
    <div className="bg-fixed bg-cover bg-center h-96 relative flex items-center justify-center" style={{ backgroundImage: "url('/school_view.jpg')", backgroundSize: '100% 100%' }}>
      <h1 className="text-3xl text-white font-bold">HOPE Academy</h1>
    </div>
  );
};

export default ParallaxScrolling;
