// Catalog.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { products } from "./data"; // Импорт данных
import "./Catalog.css";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8">
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
  );
}
