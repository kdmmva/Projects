import React, { useState } from 'react';
import { FaSearch, FaCheck, FaCartPlus } from 'react-icons/fa';
import { products } from '../data/data';
import { useCart } from '../context/CartContext';
import '../Catalog.css';

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortOption, setSortOption] = useState("new");
  const [activeButton, setActiveButton] = useState(null);
  const { cartItems, updateCart } = useCart();

  const handleButtonClick = (buttonId) => {
    setActiveButton(prev => prev === buttonId ? null : buttonId);
    setSortOption(buttonId);
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    updateCart(updatedCart);
  };

  const filteredProducts = products.filter(product => {
    const price = parseFloat(product.price.replace('$', ''));
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      price >= minPrice && price <= maxPrice
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price ascending') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    }
    if (sortOption === 'price descending') {
      return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    }
    return 0;
  });

  return (
    <div className="filter-container flex mt-20 px-4 sm:px-6 lg:px-8"> 
      <div className="sidebar w-1/5 pr-4">
        <h2 className="text-lg font-semibold mb-4">Keywords</h2>
        <div className="checkbox-group1">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            Label
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            Label
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            Label
          </label>
        </div>
        <div className="filter-section mb-4">
          <label htmlFor="range" className="block text-sm font-medium">Price Range</label>
          <input
            type="range"
            id="range"
            min="0"
            max="2000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full mt-2"
          />
          <div className="flex justify-between">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
        </div>
        <div className="filter-section mb-4">
          <h3 className="text-md font-semibold mb-2">Color</h3>
          <div className="checkbox-label">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Label
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Label
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Label
            </label>
          </div>
          <h3 className="text-md font-semibold mb-2">Size</h3>
          <div className="checkbox-label">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Label
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Label
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Label
            </label>
          </div>
        </div>
      </div>

      <div className="main-content flex-1">
        <div className="flex items-center mb-6 relative">
          <div className="search-container flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
          <div className="sort-buttons-container">
            <div className="sort-buttons">
              <button 
                onClick={() => handleButtonClick("new")} 
                className={`sort-button ${activeButton === 'new' ? 'active' : ''}`}
              >
                {activeButton === 'new' && <FaCheck className="sort-icon" />}
                New
              </button>
              <button 
                onClick={() => handleButtonClick("price ascending")} 
                className={`sort-button ${activeButton === 'price ascending' ? 'active' : ''}`}
              >
                {activeButton === 'price ascending' && <FaCheck className="sort-icon" />}
                Price Ascending
              </button>
              <button 
                onClick={() => handleButtonClick("price descending")} 
                className={`sort-button ${activeButton === 'price descending' ? 'active' : ''}`}
              >
                {activeButton === 'price descending' && <FaCheck className="sort-icon" />}
                Price Descending
              </button>
              <button 
                onClick={() => handleButtonClick("rating")} 
                className={`sort-button ${activeButton === 'rating' ? 'active' : ''}`}
              >
                {activeButton === 'rating' && <FaCheck className="sort-icon" />}
                Rating
              </button>
            </div>
          </div>
        </div>

        <div className="grid">
          {sortedProducts.slice(0, 4).map(product => (
            !product.isRectangular && (
              <div key={product.id} className="product-card bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-price">{product.price}</p>
                  <p className="product-description">{product.description}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="add-to-cart-button flex items-center mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                  >
                    <FaCartPlus className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          ))}
        </div>

        <div className="grid-rectangular">
          {sortedProducts.filter(product => product.isRectangular).map(product => (
            <div key={product.id} className="product-card product-card-rectangular bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
                <button 
                  onClick={() => handleAddToCart(product)} 
                  className="add-to-cart-button flex items-center mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                >
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
