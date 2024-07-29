import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
  };

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1636761358774-6c14f281d5c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Full Screen Background"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Website</h1>
          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button 
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button 
            </button>
          </div>
        </div>
      </div>

      <div className="slider-container w-full md:w-2/3 mx-auto mt-10">
        <Slider {...sliderSettings}>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
            <p className="legend">Slide 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
            <p className="legend">Slide 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
            <p className="legend">Slide 3</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slide 4" />
            <p className="legend">Slide 4</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slide 5" />
            <p className="legend">Slide 5</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
