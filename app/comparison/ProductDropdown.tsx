"use client";
import { useState } from "react";

const ProductDropdown = () => {
  const [selectedProduct, setSelectedProduct] = useState("Choose a Product");
  const [isOpen, setIsOpen] = useState(false);

  const products = ["Product 1", "Product 2"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (product: string) => {
    setSelectedProduct(product);
    setIsOpen(false);
  };

  return (
    <div className="max-w-xs mx-auto space-y-2">
      <h2 className="text-lg font-semibold">Add A Product</h2>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="w-full px-4 py-2 text-left bg-yellow-600 text-white font-medium rounded-md flex justify-between items-center"
        >
          {selectedProduct}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            {products.map((product, index) => (
              <li
                key={index}
                onClick={() => handleSelect(product)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
              >
                {product}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductDropdown;
