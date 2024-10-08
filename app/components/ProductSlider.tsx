"use client";

import React, { useState } from "react";
import { Product } from "../../lib/queries";

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0">
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &rarr;
      </button>
    </div>
  );
};

export default ProductSlider;
