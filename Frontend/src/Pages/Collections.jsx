import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  
  // Main active filter states
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  // Temporary filter states for Modal Popup
  const [tempCategory, setTempCategory] = useState([]);
  const [tempSubCategory, setTempSubCategory] = useState([]);

  const [sortType, setSortType] = useState('relevant');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Smooth delayed open handler (Sync temp state with main state)
  const handleOpenFilter = () => {
    setTempCategory([...category]);
    setTempSubCategory([...subCategory]);
    setShowFilter(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 50);
  };

  // Smooth delayed close handler
  const handleCloseFilter = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setShowFilter(false);
    }, 400);
  };

  // Apply button action - Syncs temp state to main state
  const handleApplyFilter = () => {
    setCategory([...tempCategory]);
    setSubCategory([...tempSubCategory]);
    handleCloseFilter();
  };

  // Direct toggle for Desktop Sidebar
  const toggleCategory = (e) => {
    const val = e.target.value;
    if (category.includes(val)) {
      setCategory(prev => prev.filter(item => item !== val));
    } else {
      setCategory(prev => [...prev, val]);
    }
  };

  const togglesubCategory = (e) => {
    const val = e.target.value;
    if (subCategory.includes(val)) {
      setSubCategory(prev => prev.filter(item => item !== val));
    } else {
      setSubCategory(prev => [...prev, val]);
    }
  };

  // Modal Temp Category Toggle
  const toggleTempCategory = (e) => {
    const val = e.target.value;
    if (tempCategory.includes(val)) {
      setTempCategory(prev => prev.filter(item => item !== val));
    } else {
      setTempCategory(prev => [...prev, val]);
    }
  };

  // Modal Temp SubCategory Toggle
  const toggleTempSubCategory = (e) => {
    const val = e.target.value;
    if (tempSubCategory.includes(val)) {
      setTempSubCategory(prev => prev.filter(item => item !== val));
    } else {
      setTempSubCategory(prev => [...prev, val]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const sortOptions = [
    { label: 'Sort by: Relevant', value: 'relevant' },
    { label: 'Sort by: Low to High', value: 'low-high' },
    { label: 'Sort by: High to Low', value: 'high-low' },
  ];

  const clearAllFilters = () => {
    setTempCategory([]);
    setTempSubCategory([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 flex flex-col xl:flex-row gap-8 lg:gap-12 relative">
      
      {/* Desktop Left Side Sticky Sidebar */}
      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="bg-slate-900 text-white px-6 py-3.5 rounded-2xl font-bold text-xs tracking-wider uppercase shadow-lg shadow-slate-900/10 mb-6 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span>FILTERS & CATEGORIES</span>
        </div>

        <div className="space-y-6 sticky top-24">
          {/* Categories Box */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md shadow-gray-100/50">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
              <p className="text-xs font-black uppercase tracking-widest text-indigo-600">Categories</p>
              <span className="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full">{category.length}</span>
            </div>
            <div className="flex flex-col gap-3.5 text-sm font-medium text-slate-700">
              {['Men', 'Women', 'Kids'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group select-none">
                  <input className="w-4 h-4 accent-indigo-600 rounded cursor-pointer transition-transform group-hover:scale-110" type="checkbox" value={item} checked={category.includes(item)} onChange={toggleCategory} />
                  <span className="group-hover:text-indigo-600 transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Type / SubCategory Box */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md shadow-gray-100/50">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
              <p className="text-xs font-black uppercase tracking-widest text-indigo-600">Product Type</p>
              <span className="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full">{subCategory.length}</span>
            </div>
            <div className="flex flex-col gap-3.5 text-sm font-medium text-slate-700">
              {['Topwear', 'Bottomwear', 'Winterwear'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group select-none">
                  <input className="w-4 h-4 accent-indigo-600 rounded cursor-pointer transition-transform group-hover:scale-110" type="checkbox" value={item} checked={subCategory.includes(item)} onChange={togglesubCategory} />
                  <span className="group-hover:text-indigo-600 transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Filter Modal (Uses Temp States until Apply clicked) */}
      {showFilter && (
        <div 
          onClick={handleCloseFilter}
          className={`fixed inset-0 z-50 xl:hidden flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-400 ease-out ${
            animateModal ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 flex flex-col justify-between transform transition-all duration-500 ease-out ${
              animateModal 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-90 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span className="font-extrabold text-slate-900 text-base">Filters</span>
                </div>
                <button 
                  onClick={handleCloseFilter} 
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-slate-900 bg-gray-50 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Categories */}
              <div className="mb-5">
                <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-3">Categories</p>
                <div className="space-y-2.5">
                  {['Men', 'Women', 'Kids'].map((item) => (
                    <label key={item} className="flex items-center justify-between p-2.5 rounded-2xl bg-gray-50/70 hover:bg-gray-100/80 cursor-pointer transition-colors">
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                      <input className="w-4 h-4 accent-indigo-600 rounded cursor-pointer" type="checkbox" value={item} checked={tempCategory.includes(item)} onChange={toggleTempCategory} />
                    </label>
                  ))}
                </div>
              </div>

              {/* Product Type */}
              <div className="mb-5">
                <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-3">Product Type</p>
                <div className="space-y-2.5">
                  {['Topwear', 'Bottomwear', 'Winterwear'].map((item) => (
                    <label key={item} className="flex items-center justify-between p-2.5 rounded-2xl bg-gray-50/70 hover:bg-gray-100/80 cursor-pointer transition-colors">
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                      <input className="w-4 h-4 accent-indigo-600 rounded cursor-pointer" type="checkbox" value={item} checked={tempSubCategory.includes(item)} onChange={toggleTempSubCategory} />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-gray-100 flex gap-3">
              <button 
                onClick={clearAllFilters}
                className="flex-1 py-3 text-xs font-extrabold text-slate-600 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors active:scale-95"
              >
                Clear
              </button>
              <button 
                onClick={handleApplyFilter}
                className="flex-1 py-3 text-xs font-extrabold text-white bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-colors active:scale-95"
              >
                Apply
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Right Side: Products Display & Header */}
      <div className="flex-1">
        
        {/* Header Layout */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
          
          <div className="text-xl sm:text-3xl font-extrabold">
            <Title text1={'ALL'} text2={' COLLECTIONS'} />
          </div>

          <div className="flex items-center gap-3 w-full xl:w-auto">
            <button
              onClick={handleOpenFilter}
              className="xl:hidden flex-1 xl:flex-none bg-slate-900 text-white px-4 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 hover:bg-slate-800 transition-all cursor-pointer active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>FILTER</span>
              {(category.length > 0 || subCategory.length > 0) && (
                <span className="bg-indigo-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                  {category.length + subCategory.length}
                </span>
              )}
            </button>

            {/* Custom Styled Sort Dropdown */}
            <div className="relative flex-1 xl:flex-none" ref={dropdownRef}>
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full bg-white border border-gray-200 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 pl-4 pr-9 py-3 flex items-center justify-between gap-2 shadow-sm hover:border-indigo-400 outline-none transition-all cursor-pointer min-w-[160px] sm:min-w-[200px]"
              >
                <span className="truncate">{sortOptions.find(opt => opt.value === sortType)?.label}</span>
                <svg 
                  className={`w-4 h-4 text-gray-500 transition-transform duration-300 shrink-0 ${isSortOpen ? 'rotate-180 text-indigo-600' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Custom Popover Menu */}
              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-full min-w-[200px] bg-white border border-gray-100 rounded-2xl shadow-xl z-40 overflow-hidden py-1.5 animate-in fade-in zoom-in-95 duration-150">
                  {sortOptions.map((option) => (
                    <div
                      key={option.value}
                      onClick={() => {
                        setSortType(option.value);
                        setIsSortOpen(false);
                      }}
                      className={`px-4 py-2.5 text-xs sm:text-sm font-bold cursor-pointer transition-colors flex items-center justify-between ${
                        sortType === option.value
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-slate-700 hover:bg-gray-50 hover:text-indigo-600'
                      }`}
                    >
                      <span>{option.label}</span>
                      {sortType === option.value && (
                        <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 gap-y-6 sm:gap-y-8">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collections;