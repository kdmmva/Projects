import React from 'react';
import Modal from 'react-modal';
import { useCart } from '../context/CartContext';
import '../CartModal.css';

Modal.setAppElement('#root');

const CartModal = ({ isOpen, onRequestClose }) => {
  const { cartItems, updateCart } = useCart();

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cart Modal"
      className="modal cart-modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2 className="text-2xl font-bold">Cart</h2>
      </div>
      <div className="modal-content">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span>{item.name}</span>
                <button onClick={() => handleRemoveFromCart(index)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="modal-footer">
        <button onClick={onRequestClose} className="bg-blue-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </Modal>
  );
};

export default CartModal;
