import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
  const [visible,setVisible] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes('colletion')){
      setVisible(true);
    }
    else{
      setVisible(false)
    }
  },[location])

  return showSearch ? (
    <div className='w-full bg-slate-50/80 backdrop-blur-md border-t border-b border-gray-100 py-4 px-4 transition-all duration-300'>
      <div className='max-w-3xl mx-auto flex items-center justify-center gap-3 sm:gap-4'>
        
        {/* Search Input Box Container */}
        <div className='flex-1 flex items-center gap-3 bg-white border border-gray-200/90 shadow-sm focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-full px-5 py-2.5 transition-all duration-200'>
          <input 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} 
            className='w-full outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400 font-medium' 
            type='text' 
            placeholder='Search products...'
          />
          <img 
            className='w-4 h-4 opacity-50 flex-shrink-0 cursor-pointer hover:opacity-100 transition-opacity' 
            src={assets.search_icon} 
            alt=''
          />
        </div>

        {/* Close Button */}
        <button 
          onClick={()=>setShowSearch(false)} 
          className='p-2 rounded-full hover:bg-gray-200/60 transition-colors flex-shrink-0'
        >
          <img 
            className='w-3.5 h-3.5 cursor-pointer opacity-60 hover:opacity-100 transition-opacity' 
            src={assets.cross_icon} 
            alt=''
          />
        </button>

      </div>
    </div>
  ) : null
}

export default SearchBar