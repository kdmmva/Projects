import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { FaCog, FaShoppingCart } from "react-icons/fa";
import './Navbar.css';

Modal.setAppElement('#root');

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelection = () => {
    closeModal(); 
  };

  return (
    <nav className="bg-gray-900 p-4 fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <svg
            className="h-12 w-12 text-white transition-colors duration-300 hover:text-orange-400 animate-steering-wheel"
            fill="#ffffff"
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
          <div className="text-white font-bold text-3xl">
            Auto Service
          </div>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`lg:flex flex-col lg:flex-row ${
            isOpen ? "block" : "hidden"
          } lg:space-x-6 lg:mt-0 mt-4 flex flex-col items-center text-xl`}
        >
          <Link to="/home" className="text-white px-4 py-2 transition-colors duration-300 hover:text-orange-400">
            Home
          </Link>

          <Link to="/catalog" className="text-white px-4 py-2 transition-colors duration-300 hover:text-orange-400">
            Catalog
          </Link>
          <Link to="/about" className="text-white px-4 py-2 transition-colors duration-300 hover:text-orange-400">
            About us
          </Link>
          <Link to="/news" className="text-white px-4 py-2 transition-colors duration-300 hover:text-orange-400">
            News
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-white focus:outline-none">
            <FaCog className="h-6 w-6 text-white duration-300 hover:text-orange-400" />
          </button>
          <button className="text-white focus:outline-none">
            <FaShoppingCart className="h-6 w-6 text-white duration-300 hover:text-orange-400" />
          </button>

          <button className="text-white focus:outline-none" onClick={openModal}>
            <svg
              className="h-6 w-6 text-white duration-300 hover:text-orange-400"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
          </button>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Login/Register Modal"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <div className="modal-header">
              <h2 className="text-2xl font-bold">Welcome!</h2>
            </div>
            <div className="modal-content">
              <Link to="/login" onClick={handleSelection} className="block text-blue-500 hover:text-orange-400 transition-colors duration-300 mb-2">
                Login
              </Link>
              <Link to="/register" onClick={handleSelection} className="block text-blue-500 hover:text-orange-400 transition-colors duration-300">
                Register
              </Link>
            </div>
            <div className="modal-footer">
              <button onClick={closeModal} className="close-btn">
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </nav>
  );
}
