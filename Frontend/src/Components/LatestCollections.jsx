import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <section className="my-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header with Gradient */}
      <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl mb-10">
        <span className="text-xs font-bold tracking-widest text-indigo-900 uppercase bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
          NEW ARRIVALS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-100 to-pink-100 bg-clip-text text-transparent">
          LATEST COLLECTIONS
        </h2>
        <div className="w-12 h-1 bg-white/80 rounded-full my-3"></div>
        <p className="max-w-2xl text-sm sm:text-base text-indigo-100 font-normal leading-relaxed">
          Explore our newest drop featuring trendsetting designs, premium fabrics, and modern fits tailored for every season.
        </p>
      </div>

      {/* Product Grid - No extra wrapper div around ProductItem */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 gap-y-8">
        {latestProducts.map((item, index) => (
          <ProductItem 
            key={item._id || index} 
            id={item._id} 
            image={item.image} 
            name={item.name} 
            price={item.price} 
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollections;