import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../data/data"; 
import "../Home.css";

const FeaturedSection = () => (
  <div className="flex flex-col md:flex-row items-center justify-center my-20 px-4">
    <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12 max-w-screen-lg">
      <div className="flex-shrink-0 relative image-slide-in">
        <img
          src="https://media.istockphoto.com/id/1589417945/photo/hand-of-mechanic-holding-car-service-and-checking.webp?b=1&s=170667a&w=0&k=20&c=ve2SFpPfslb8-QEgtqkHPLG4SR15aLlJiaJrqqfa164="
          alt="Featured Image"
          className="w-full md:w-96 h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col justify-center text-center md:text-left text-slide-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">The best spare parts from all over the world</h2>
        <p className="text-base md:text-lg text-gray-800">
          Discover our featured product with exceptional quality and exclusive offers. Don't miss out on this fantastic opportunity to own a top-notch item!
          <br />
          <br />
          Our featured product is carefully selected to meet your needs and exceed your expectations. Explore the details and see why it's a favorite among our customers.
        </p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 1100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up">Welcome to Our Service</h1>
          <div className="space-x-4">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
      </div>

      <div className="products-carousel w-full mt-20 mb-40">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id} className="p-6">
              <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center justify-between border border-gray-300 w-96 h-96 relative group transition-transform duration-300 hover:scale-105">
                <div className="w-full h-3/4 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-2">${product.price}</p> {/* Добавлен знак доллара */}
                  <p className="text-sm text-gray-700 mb-4">{product.description}</p>
                  <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <FeaturedSection />
    </div>
  );
}
