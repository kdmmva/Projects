import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 border-t border-gray-200 bg-white">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-3 lg:grid-cols-5">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="AutoCatalog"
            className="inline-flex items-center"
          >
            <svg
            className="h-12 w-12 text-white transition-colors duration-300 hover:text-orange-400"
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path d="M437.02,74.981C388.668,26.628,324.38,0,256,0S123.333,26.628,74.98,74.981C26.628,123.333,0,187.62,0,256 s26.628,132.667,74.98,181.019C123.333,485.372,187.62,512,256,512s132.667-26.628,181.02-74.981 C485.372,388.668,512,324.38,512,256S485.372,123.333,437.02,74.981z M256,57.263c100.782,0,184.276,75.409,197.04,172.765 L329.849,218.03c-13.813-26.755-41.72-45.102-73.849-45.102s-60.036,18.347-73.849,45.102L58.96,230.028 C71.724,132.672,155.218,57.263,256,57.263z M58.889,281.375l121.731,9.484c7.69,16.55,20.669,30.166,36.76,38.655l7.978,122.859 C138.513,438.875,70.099,368.943,58.889,281.375z M256,281.809c-14.232,0-25.809-11.578-25.809-25.809S241.77,230.191,256,230.191 S281.809,241.77,281.809,256S270.232,281.809,256,281.809z M286.644,452.373l7.978-122.859 c16.091-8.488,29.069-22.105,36.76-38.655l121.731-9.484C441.901,368.943,373.487,438.875,286.644,452.373z"/>
              </g>
            </g>
          </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
              Auto Service Company
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-600">
            Here you will find the most important and necessary for your cars of any model!
            </p>
            <p className="mt-4 text-sm text-gray-600">
            You can contact us for help in finding rare parts around the world.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-black">
            Navigation
          </p>
          <div className="flex">
            <Link to="/home">
              <a className="transition-colors duration-300 text-gray-600 hover:text-orange-600">
                Home
              </a>
            </Link>
          </div>
          <div className="flex">
            <Link to="/catalog">
              <a className="transition-colors duration-300 text-gray-600 hover:text-orange-600">
                Catalog
              </a>
            </Link>
          </div>
          <div className="flex">
            <Link to="/about">
              <a className="transition-colors duration-300 text-gray-600 hover:text-orange-600">
                About us
              </a>
            </Link>
          </div>
          <div className="flex">
            <Link to="/news">
              <a className="transition-colors duration-300 text-gray-600 hover:text-orange-600">
                News
              </a>
            </Link>
          </div>
          <div className="flex">
            <Link to="/login">
              <a className="transition-colors duration-300 text-gray-600 hover:text-orange-600">
                Login
              </a>
            </Link>
          </div>
          <div className="flex">
            <Link to="/register">
              <a className="transition-colors duration-300 text-gray-600 hover:text-orange-600">
                Register
              </a>
            </Link>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-black">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-600">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-gray-600 hover:text-orange-600"
            >
              +994 50 666 66 66
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-600">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-gray-600 hover:text-orange-600"
            >
              auto.service@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-600">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-gray-600 hover:text-orange-600"
            >
              Baku, Azerbaijan
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-black">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-gray-800"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-gray-800"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-gray-800"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-5 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Auto Service. All rights reserved.
        </p>
      </div>
    </div>
  );
}
