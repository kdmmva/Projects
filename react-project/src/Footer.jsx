import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-4 pt-16 mx-auto bg-white border-t border-gray-200">
      <div className="flex flex-wrap justify-between gap-8 mb-8 sm:gap-4 lg:gap-8 font-sans font-light">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
          <span className="text-xl font-semibold tracking-wide text-black">Social</span>
          <div className="flex items-center mt-2 space-x-3">
            <a
              href="/"
              className="text-blue-500 transition-colors duration-300 hover:text-blue-700"
              aria-label="Twitter"
              title="Twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-.9.5-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-3.3-.2-6.3-1.7-8.3-4-1.3 2.2-.7 5.2 1.4 6.7-.7-.1-1.4-.2-2-.5v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14 0-.2 0-.4-.1-.6.9-.6 1.7-1.3 2.4-2.1z"></path>
              </svg>
            </a>
            <a
              href="/"
              className="text-pink-500 transition-colors duration-300 hover:text-pink-700"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999 3h-10C6.14 3 3 6.141 3 10.001v10C3 23.86 6.141 27 10.001 27h10C23.86 27 27 23.859 27 19.999v-10C27 6.14 23.859 3 19.999 3zM15 21c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM22 9c-.552 0-1-.448-1-1 0-.552.448-1 1-1s1 .448 1 1c0 .552-.448 1-1 1z"></path>
              </svg>
            </a>
            <a
              href="/"
              className="text-blue-700 transition-colors duration-300 hover:text-blue-900"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-11.8 14H5.5v-10h2.7v10zm-1.4-11.7c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7c0 .9-.8 1.7-1.7 1.7zm13.4 11.7h-2.7v-5.3c0-1.3-.5-2.2-1.7-2.2-1.1 0-1.8.8-2.1 1.5-.1.2-.1.5-.1.7v5.3h-2.7v-10h2.7v1.4c.3-.5 1.2-1.4 2.8-1.4 2 0 3.6 1.3 3.6 4.1v5.9z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 space-y-3 text-base">
          <p className="text-xl font-semibold tracking-wide text-black">Contacts</p>
          <div className="flex flex-col sm:flex-row">
            <p className="mr-2 text-gray-600">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="text-gray-600 transition-colors duration-300 hover:text-orange-600"
            >
              +994 50 666 66 66
            </a>
          </div>
          <div className="flex flex-col sm:flex-row">
            <p className="mr-2 text-gray-600">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="text-gray-600 transition-colors duration-300 hover:text-orange-600"
            >
              auto.service@gmail.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row">
            <p className="mr-2 text-gray-600">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="text-gray-600 transition-colors duration-300 hover:text-orange-600"
            >
              Baku, Azerbaijan
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 space-y-3 text-base">
          <p className="text-xl font-semibold tracking-wide text-black">About Us</p>
          <div className="flex flex-col space-y-1">
            <Link to="/company">
              <a className="text-gray-600 transition-colors duration-300 hover:text-orange-600">Our Company</a>
            </Link>
            <Link to="/team">
              <a className="text-gray-600 transition-colors duration-300 hover:text-orange-600">Our Team</a>
            </Link>
            <Link to="/careers">
              <a className="text-gray-600 transition-colors duration-300 hover:text-orange-600">Careers</a>
            </Link>
            <Link to="/news">
              <a className="text-gray-600 transition-colors duration-300 hover:text-orange-600">News</a>
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 space-y-3 text-base">
          <p className="text-xl font-semibold tracking-wide text-black">Resources</p>
          <div className="flex flex-col space-y-1">
            <Link to="/blog">
              <a className="text-gray-600 transition-colors duration-300 hover:text-orange-600">Blog</a>
            </Link>
            <Link to="/faq">
              <a className="text-gray-600 transition-colors duration-300 hover:text-orange-600">FAQ</a>
            </Link>
            <Link to="/terms">
              <a className="text-gray-600 transition-colors duration-300 hover:text-orange-600">Terms & Conditions</a>
            </Link>
            <Link to="/privacy">
              <a className="text-gray-600 transition-colors duration-300 hover:text-orange-600">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-5 pb-10 border-t">
        <p className="text-sm text-gray-600">© 2024 Auto Service. All rights reserved.</p>
      </div>
    </div>
  );
}
