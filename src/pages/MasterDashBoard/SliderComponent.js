import React, { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const SliderComponent = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hidden md:flex md:flex-row md:items-center md:justify-start md:h-screen md:mx-54">
      <button onClick={prevSlide} className="p-4 absolute left-72 z-10 bg-white rounded-full shadow-lg focus:outline-none">
       <FaChevronLeft size={20} className=''/>
      </button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-transform transform  rounded-t-lg ${
            index === currentSlide ? 'scale-100' : 'scale-75'
          }`}
        >
          <img src={slide} alt={`Slide ${index}`} className="rounded-md shadow-lg md:w-96 w-40" />
          <p className='bg-[#8eb7cb] md:p-4 rounded-b-lg p-0 md:w-96'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
        </div>
      ))}
      <button onClick={nextSlide} className="p-4 absolute right-12 bg-white rounded-full shadow-lg focus:outline-none">
        <FaChevronRight size={20} className=''/>
      </button>
    </div>
  );
};
export default SliderComponent