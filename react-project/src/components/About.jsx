import React, { useEffect } from 'react';
import { users } from '../data/data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from 'react-spring';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } });

  return (
    <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-300 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <animated.h1 style={fadeIn} className="text-5xl font-extrabold text-center text-gray-900 mb-16">
          About Us
        </animated.h1>

        <section className="relative bg-white shadow-xl rounded-xl p-8 mb-16 overflow-hidden border border-orange-200">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/car-service-technologycustomer-satisfaction-guarantee-600nw-2271159941.jpg)', height: '70%' }}></div>
          <div className="relative z-10 bg-white bg-opacity-80 rounded-xl p-8">
            <h2 className="text-4xl font-semibold mb-6 text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At AutoService, our mission is to provide top-notch automotive care with exceptional service and expertise. We are dedicated to ensuring your vehicle is in optimal condition, delivering quality repairs and maintenance that exceed your expectations.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-xl rounded-xl p-8 mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap -mx-4">
            {users.slice(0, 6).map((user) => (
              <div key={user.id} className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-gray-100 p-6 rounded-xl text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out" data-aos="fade-up">
                  <img
                    src={user.userAvatar}
                    alt={user.userName}
                    className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-gray-300 shadow-md object-cover transition-transform transform hover:scale-110 duration-500 ease-in-out"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                    {user.userName}
                  </h3>
                  <p className="text-gray-600">{user.postText}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white shadow-xl rounded-xl p-8 mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">
            Our Values
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-800">
            <li><strong>Integrity:</strong> We believe in honest and transparent communication with our clients.</li>
            <li><strong>Quality:</strong> We are committed to providing high-quality service and using the best parts and tools.</li>
            <li><strong>Customer Satisfaction:</strong> Our goal is to ensure that every customer leaves with a smile and their vehicle in perfect condition.</li>
            <li><strong>Innovation:</strong> We continually update our practices and technologies to stay ahead in the automotive industry.</li>
          </ul>
        </section>

        <section className="bg-black bg-opacity-70 backdrop-blur-md shadow-xl rounded-xl p-8 mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-gray-100">
            What Our Clients Say
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 duration-500 ease-in-out" data-aos="fade-left">
                <p className="text-gray-800 italic">
                  "The service was exceptional. My car runs like new again, and the staff was incredibly friendly and professional."
                </p>
                <p className="text-gray-700 mt-4 text-right">- Jane Doe</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 duration-500 ease-in-out" data-aos="fade-right">
                <p className="text-gray-800 italic">
                  "I am very impressed with the quality of work and the attention to detail. Highly recommended!"
                </p>
                <p className="text-gray-700 mt-4 text-right">- John Smith</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black bg-opacity-70 backdrop-blur-md shadow-xl rounded-xl p-8 mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-gray-100">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ease-in-out"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ease-in-out"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ease-in-out"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" /> Send Message
            </button>
          </form>
        </section>

        <section className="bg-white shadow-xl rounded-xl p-8 mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">
            Our Location
          </h2>
          <div className="relative w-full rounded-xl overflow-hidden">
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-md border border-orange-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11602.702315357264!2d49.8382615!3d40.3796592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403071d802d6b71f%3A0x419aeb00a3c6dd2!2zQmFjdXMgQXplcmJhamFu!5e0!3m2!1sen!2s!4v1628264369021!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
