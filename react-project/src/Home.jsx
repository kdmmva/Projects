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
      <p className="text-5xl text-purple-400">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>
      <p className="text-5xl">Hello</p>

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
