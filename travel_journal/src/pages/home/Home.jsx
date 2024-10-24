import React, { useState,useEffect } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";

const slides = [
    "./img/img-1.jpg",
    "./img/img-2.jpg",
    "./img/img-3.jpg",
    "./img/img-4.jpg",
    "./img/img-5.jpg",
];

const cardimg=[
  "./public/img/newyouk-1.jpg",
  "./public/img/london-1 .jpg",
  "./public/img/paris-1.jpg",
  "./public/img/sydney-1 .jpg",
  "./public/img/img1.jpg",
  "./public/img/img2.jpg",
  "./public/img/img3.jpg",
  "./public/img/img4.jpg",
  "./public/img/img5.jpg",
  "./public/img/img6.jpg",
  "./public/img/img7.jpg",
  "./public/img/img8.jpg",
  

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
        <div className='absolute text-center top-[50%] -translate-x-0 translate-y-[-50%]  text-2xl p-2 mr-16 ml-16  cursor-pointer'>
        <h1 className='text-5xl font-bold mb-4 text-center text-cyan-500' >Adventurist</h1><br></br>
        <p className='text-centre '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, doloremque saepe pariatur nostrum maiores, dolor qui vero animi, deleniti commodi adipisci</p><br></br>
        <a href="" className="bg-green-400 font-semibold inline-block px-10 py-3 hover:bg-indigo-400 hover:text-white transition-all text-left">Explore Now</a>
        </div>
      </div>
      <div>
      <div className="container mx-auto px-4 py-8">
   
   <div className="text-center mb-8">
     <h2 className="text-2xl font-semibold text-gray-800">Popular Locations</h2>
     <p className="text-orange-500 font-medium italic">Start Traveling Today</p>
   </div>

  
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
     
    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={cardimg[0]} alt="New York" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">New York</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={cardimg[1]} alt="London" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">London</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={cardimg[2]} alt="Paris" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">Paris</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={cardimg[3]} alt="Sydney" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">Sydney</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

   </div>
 </div>


 <div>
 <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      
      
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium italic">Blog</p>
        <h2 className="text-3xl font-semibold text-gray-800">Latest News</h2>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div className="group">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img src={cardimg[4]} alt="News 1" className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"></img>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-600 space-x-2">
              <span className="text-orange-500">Adventure</span>
              <span>•</span>
              <span>June 12, 2023</span>
              <span>•</span>
              <span>12</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">Jim Morrison says when the music's over turn off the light</h3>
          </div>
        </div>

        
        <div className="group">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src={cardimg[5]} alt="News 2" class="w-full h-64 object-cover group-hover:scale-110 transition duration-300"></img>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-600 space-x-2">
              <span className="text-orange-500">Adventure</span>
              <span>•</span>
              <span>June 13, 2023</span>
              <span>•</span>
              <span>17</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">Jim Morrison says when the music's over turn off the light</h3>
          </div>
        </div>

        
        <div className="group">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src={cardimg[8]}alt="News 3" className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"></img>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-600 space-x-2">
              <span className="text-orange-500">Adventure</span>
              <span>•</span>
              <span>June 17, 2023</span>
              <span>•</span>
              <span>10</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">Jim Morrison says when the music's over turn off the light</h3>
          </div>
        </div>

      </div>

      
      <div className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          
          <img src={cardimg[6]} alt="Gallery 1" className="w-full h-40 object-cover rounded-lg"></img>
          <img src={cardimg[9]} alt="Gallery 2" className="w-full h-40 object-cover rounded-lg"></img>
          <div className="relative">
            <img src={cardimg[10]} alt="Gallery 3" class="w-full h-40 object-cover rounded-lg"></img>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center shadow-lg">
                <a href="#" className="text-sm font-semibold text-gray-700">Follow Us <br></br> on Instagram</a>
              </div>
            </div>
          </div>
          <img src={cardimg[7]} alt="Gallery 4" className="w-full h-40 object-cover rounded-lg"></img>
          <img src={cardimg[8]} alt="Gallery 5" className="w-full h-40 object-cover rounded-lg"></img>
        </div>
      </div>

    </div>
  </section>


 </div>


      </div>

      
    </div>

    
  );
};

export default Home;
