import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const LoginRegisterModal = ({ isOpen, onRequestClose, handleSelection }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login/Register Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2 className="text-2xl font-bold">Choose</h2>
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
        <button onClick={onRequestClose} className="bg-blue-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </Modal>
  );
};

export default LoginRegisterModal;
