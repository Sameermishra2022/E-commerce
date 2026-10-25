import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setToken }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3.5 px-4 sm:px-8">
        
        
    <Link to="/" className="flex items-center shrink-0 cursor-pointer">
          <img 
            className="w-28 sm:w-36 object-contain" 
            src={assets.logo_new} 
            alt="Logo" 
          />
        </Link>

        <button 
          onClick={() => setToken('')} 
          className="flex items-center gap-2 bg-[#111827] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm hover:bg-slate-800 transition-all active:scale-95 cursor-pointer shrink-0"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout</span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;