import React from 'react';
import Carousel from '@/components/Caraousal';

const Home = () => {
  return (
    <div className="home">
      {/* Introduction Section */}
      <section className="introduction text-center py-8 mt-16"> {/* Added mt-16 for top margin */}
        <h1 className="text-4xl font-bold mt-4">Springdale Public School</h1>
        <p className="mt-2 text-lg">
          Welcome to Springdale Public School, where we nurture young minds to achieve excellence in academics and beyond.
        </p>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section my-8">
        <Carousel />
      </section>

    
      
    </div>
  );
};

export default Home;