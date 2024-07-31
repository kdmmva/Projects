import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { products } from "./data";
import "./Catalog.css";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <label htmlFor="range" className="block text-sm font-medium">Label</label>
          <input type="range" id="range" className="w-full mt-2" />
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
        <div className="search-container mb-6">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        
        <div className="grid">
          {filteredProducts.slice(0, 4).map(product => (
            !product.isRectangular && (
              <div key={product.id} className="product-card bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-price">{product.price}</p>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            )
          ))}
        </div>
        
        <div className="grid-rectangular">
          {filteredProducts.filter(product => product.isRectangular).map(product => (
            <div key={product.id} className="product-card product-card-rectangular bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}