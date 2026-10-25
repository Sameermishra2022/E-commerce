import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <section className="my-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Redesigned Header with Gradient */}
      <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-xl mb-10">
        <span className="text-xs font-bold tracking-widest text-amber-950 uppercase bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
          🔥 MOST POPULAR
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent">
          BEST SELLERS
        </h2>
        <div className="w-12 h-1 bg-white/80 rounded-full my-3"></div>
        <p className="max-w-2xl text-sm sm:text-base text-amber-100 font-normal leading-relaxed">
          Discover our top-rated customer favorites, handpicked for their exceptional style, quality, and timeless appeal.
        </p>
      </div>

      {/* Product Grid - Direct ProductItem without extra wrapper */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 gap-y-8">
        {bestSeller.map((item, index) => (
          <ProductItem 
            key={item._id || index} 
            id={item._id} 
            name={item.name} 
            image={item.image} 
            price={item.price} 
          />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;