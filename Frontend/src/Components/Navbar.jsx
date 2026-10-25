import React, { useContext, useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setProfileOpen(false);
  };

  // Close profile dropdown on outside click (for mobile/tablet tap)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Desktop Pill Class (Unchanged)
  const navLinkClass = ({ isActive }) =>
    `px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 whitespace-nowrap ${
      isActive ? "bg-[#111827] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={assets.logo_new} alt="Logo" className="w-28 sm:w-36 object-contain" />
        </Link>

        {/* Center Pill Navigation Menu (Desktop / Large Screens Only - Untouched) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#f3f6f9] p-1.5 rounded-full border border-slate-200/50">
          <NavLink to="/" className={navLinkClass}>HOME</NavLink>
          <NavLink to="/collection" className={navLinkClass}>COLLECTION</NavLink>
          <NavLink to="/about" className={navLinkClass}>ABOUT</NavLink>
          <NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink>
        </nav>

        {/* Right Side Action Icons */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Search Icon */}
          <button 
            onClick={() => setShowSearch(true)} 
            className="p-2 sm:p-2.5 rounded-full hover:bg-slate-100 text-slate-700 transition-all active:scale-95 cursor-pointer"
            aria-label="Search"
          >
            <img src={assets.search_icon} alt="Search" className="w-4 h-4 opacity-80" />
          </button>

          {/* Profile Dropdown (Hover for Desktop & Click/Tap for Mobile/Tab) */}
          <div className="group relative" ref={profileRef}>
            <button 
              onClick={() => {
                if (!token) {
                  navigate('/login');
                } else {
                  setProfileOpen(prev => !prev);
                }
              }} 
              className="p-2 sm:p-2.5 rounded-full hover:bg-slate-100 text-slate-700 transition-all active:scale-95 cursor-pointer"
              aria-label="Account"
            >
              <img src={assets.profile_icon} alt="Profile" className="w-4 h-4 opacity-80" />
            </button>
            
            {token && (
              <div className={`absolute right-0 pt-2 w-44 z-50 ${profileOpen ? 'block' : 'hidden'} group-hover:block`}>
                <div className="py-2 px-1 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-700 text-xs font-medium">
                  <p onClick={() => { navigate('/profile'); setProfileOpen(false); }} className="px-4 py-2 rounded-xl hover:bg-slate-100 cursor-pointer">My Profile</p>
                  <p onClick={() => { navigate('/orders'); setProfileOpen(false); }} className="px-4 py-2 rounded-xl hover:bg-slate-100 cursor-pointer">Orders</p>
                  <hr className="my-1 border-slate-100" />
                  <p onClick={logout} className="px-4 py-2 rounded-xl hover:bg-red-50 text-red-600 cursor-pointer font-semibold">Logout</p>
                </div>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-[#111827] text-white rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
          >
            <img src={assets.cart_icon} alt="Cart" className="w-4 h-4 invert" />
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] sm:min-w-[20px] sm:h-[20px] flex items-center justify-center bg-[#f43f5e] text-white rounded-full text-[10px] font-bold px-1 border-2 border-white">
              {getCartCount()}
            </span>
          </Link>

          {/* Mobile and Tablet Menu Button */}
          <button 
            onClick={() => setVisible(true)} 
            className="p-2 lg:hidden rounded-full hover:bg-slate-100 text-slate-700 transition-all active:scale-95 cursor-pointer"
            aria-label="Open Menu"
          >
            <img src={assets.menu_icon} alt="Menu" className="w-5 h-5 opacity-80" />
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Drawer Overlay */}
      {visible && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs lg:hidden z-40 transition-opacity duration-500 ease-in-out" 
          onClick={() => setVisible(false)} 
        />
      )}

      {/* Mobile & Tablet Styled Slide Drawer Menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl transition-all duration-500 ease-in-out lg:hidden ${visible ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full p-6">
          
          {/* Drawer Header with Gradient Text */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Menu
            </span>
            <button 
              onClick={() => setVisible(false)} 
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Drawer Links with Active Pill & Gradient Text Effects */}
          <div className="flex flex-col gap-2 mt-6">
            <NavLink 
              onClick={() => setVisible(false)} 
              to="/" 
              className={({ isActive }) => 
                `flex items-center justify-between px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 ${
                  isActive 
                    ? "bg-[#111827] text-white shadow-md" 
                    : "hover:bg-slate-50"
                }`
              }
            >
              {({ isActive }) => (
                <span className={!isActive ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent font-extrabold" : "text-white"}>
                  HOME
                </span>
              )}
            </NavLink>

            <NavLink 
              onClick={() => setVisible(false)} 
              to="/collection" 
              className={({ isActive }) => 
                `flex items-center justify-between px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 ${
                  isActive 
                    ? "bg-[#111827] text-white shadow-md" 
                    : "hover:bg-slate-50"
                }`
              }
            >
              {({ isActive }) => (
                <span className={!isActive ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent font-extrabold" : "text-white"}>
                  COLLECTION
                </span>
              )}
            </NavLink>

            <NavLink 
              onClick={() => setVisible(false)} 
              to="/about" 
              className={({ isActive }) => 
                `flex items-center justify-between px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 ${
                  isActive 
                    ? "bg-[#111827] text-white shadow-md" 
                    : "hover:bg-slate-50"
                }`
              }
            >
              {({ isActive }) => (
                <span className={!isActive ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent font-extrabold" : "text-white"}>
                  ABOUT
                </span>
              )}
            </NavLink>

            <NavLink 
              onClick={() => setVisible(false)} 
              to="/contact" 
              className={({ isActive }) => 
                `flex items-center justify-between px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 ${
                  isActive 
                    ? "bg-[#111827] text-white shadow-md" 
                    : "hover:bg-slate-50"
                }`
              }
            >
              {({ isActive }) => (
                <span className={!isActive ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent font-extrabold" : "text-white"}>
                  CONTACT
                </span>
              )}
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar; 