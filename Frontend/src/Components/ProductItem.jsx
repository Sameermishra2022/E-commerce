import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const imgSrc = Array.isArray(image) ? image[0] : image;

  return (
    <Link 
      to={`/product/${id}`} 
      className="group block bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out h-full flex flex-col justify-between"
    >
      <div>
        {/* Image Container - Image zoom removed */}
        <div className="w-full h-60 sm:h-64 overflow-hidden rounded-xl bg-gray-50 border border-gray-100 relative">
          <img 
            src={imgSrc} 
            alt={name} 
            className="w-full h-full object-cover object-top"
            style={{ 
              imageRendering: '-webkit-optimize-contrast',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          />
        </div>

        {/* Text Content */}
        <div className="pt-3.5 px-1">
          <p className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-indigo-600 transition-colors duration-200">
            {name}
          </p>
        </div>
      </div>

      {/* Price and Arrow Icon */}
      <div className="pt-2 px-1 flex items-center justify-between mt-auto">
        <div className="text-sm sm:text-base font-extrabold text-slate-900">
          {currency || 'Rs.'} {price}
        </div>

        <div className="w-7 h-7 rounded-full bg-gray-50 text-gray-400 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;