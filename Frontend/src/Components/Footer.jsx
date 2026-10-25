import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-28 bg-slate-900 text-gray-300 rounded-t-3xl sm:rounded-t-[2.5rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info Section with Logo Link */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Logo Link to Home Page */}
            <Link 
              to="/" 
              className="inline-block bg-white border border-white/10 p-4 rounded-xl shadow-inner transition-transform duration-200 hover:scale-105"
            >
              <img 
                src={assets.logo_new} 
                alt="Company Logo" 
                className="w-36 h-auto object-contain" 
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm pt-2">
              Discover curated collections designed for modern lifestyle and timeless fashion. Premium quality, sustainable materials, and effortless elegance tailored for you.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-white text-base font-bold tracking-wider uppercase">
              Company
            </p>
            <ul className="space-y-2.5 text-sm font-medium text-gray-400">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors duration-200">
                  About us
                </Link>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors duration-200 cursor-pointer">
                  Delivery
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-400 transition-colors duration-200 cursor-pointer">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-white text-base font-bold tracking-wider uppercase">
              Get In Touch
            </p>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li className="flex items-center gap-3 hover:text-indigo-400 transition-colors cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  📞
                </span>
                +91-4565769879
              </li>
              <li className="flex items-center gap-3 hover:text-indigo-400 transition-colors cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  ✉️
                </span>
                <a href="mailto:sameer@gmail.com" className="hover:underline">
                  sameer@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Credit Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Curated & Modern. All rights reserved.</p>
          <p className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Designed by Sameer Mishra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;