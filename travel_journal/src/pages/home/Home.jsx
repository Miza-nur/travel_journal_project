import React, { useState, useEffect } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";

const slides = [
    "./img/img-1.jpg",
    "./img/img-2.jpg",
    "./img/img-3.jpg",
    "./img/img-4.jpg",
    "./img/img-5.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to automatically move to the next slide
  const updateIndex = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0); // If it's the last slide, go back to the first one
    } else {
      setCurrentIndex(currentIndex + 1); // Otherwise, move to the next slide
    }
  };

  // useEffect to handle autoplay
  useEffect(() => {
    const intervalId = setInterval(updateIndex, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex]);

  // Go to the previous slide using if-else
  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1); // If it's the first slide, go to the last one
    } else {
      setCurrentIndex(currentIndex - 1); // Otherwise, move to the previous slide
    }
  };

  // Go to the next slide using if-else
  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0); // If it's the last slide, go back to the first one
    } else {
      setCurrentIndex(currentIndex + 1); // Otherwise, move to the next slide
    }
  };

  return (
    <div className="slider w-auto h-auto m-auto   bg-center bg-cover duration-500">
      {/* Display the current slide */}
      <div className="slide ">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-screen bg-center bg-cover duration-500 relative " 
        /> 
      </div>

      {/* Navigation buttons */}
      <div className="controls ">
        <button onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20  cursor-pointer'>
        <BsChevronCompactLeft size={30}></BsChevronCompactLeft>
        </button>
        <button onClick={nextSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20  cursor-pointer'>
        <BsChevronCompactRight size={30}></BsChevronCompactRight>
        </button>
      </div>
    </div>
  );
};

export default Home;
