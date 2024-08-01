import React from 'react';
import { users } from '../data/data'; 

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At AutoService, our mission is to provide top-notch automotive care with exceptional service and expertise. We are dedicated to ensuring your vehicle is in optimal condition, delivering quality repairs and maintenance that exceed your expectations.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            {users.slice(0, 3).map((post) => (
              <div key={post.id} className="w-full md:w-1/3 px-4 mb-6">
                <div className="bg-gray-200 p-4 rounded-lg text-center">
                  <img
                    src={post.userAvatar}
                    alt={post.userName}
                    className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{post.userName}</h3>
                  <p className="text-gray-600">{post.postText}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Integrity:</strong> We believe in honest and transparent communication with our clients.</li>
            <li><strong>Quality:</strong> We are committed to providing high-quality service and using the best parts and tools.</li>
            <li><strong>Customer Satisfaction:</strong> Our goal is to ensure that every customer leaves with a smile and their vehicle in perfect condition.</li>
            <li><strong>Innovation:</strong> We continually update our practices and technologies to stay ahead in the automotive industry.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
