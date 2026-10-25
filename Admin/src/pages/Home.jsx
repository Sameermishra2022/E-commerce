import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-90px)] overflow-hidden flex items-center justify-center p-4 sm:p-8">
      
      {/* High Quality HD Background Image with Premium Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('https://img.freepik.com/premium-photo/modern-cloth-store-with-interior-decor-featuring_1189614-18266.jpg?w=1480')` 
        }}
      />
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[0px]" />

      {/* Center Modern Glassmorphic Card Content */}
      <div className="relative z-10 max-w-3xl w-full text-center px-6 sm:px-12 py-14 sm:py-16 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-white">
        
        {/* Admin Badge */}
        <span className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 rounded-full text-xs font-black tracking-widest uppercase mb-6 shadow-inner">
          Admin Control Center
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          Welcome to <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Curated & Modern</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base text-slate-200 font-medium max-w-xl mx-auto leading-relaxed">
          Manage your products, monitor store activity, and process customer orders efficiently all in one place.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link 
            to="/add" 
            className="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-indigo-600/30 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>+ Add New Item</span>
          </Link>

          <Link 
            to="/list" 
            className="px-6 py-4 bg-white/15 hover:bg-white/25 text-white rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase border border-white/20 backdrop-blur-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>View All Products</span>
          </Link>

          <Link 
            to="/orders" 
            className="px-6 py-4 bg-white/15 hover:bg-white/25 text-white rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase border border-white/20 backdrop-blur-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Manage Orders</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;