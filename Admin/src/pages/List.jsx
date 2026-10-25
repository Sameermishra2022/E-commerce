import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendurl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(backendurl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendurl + '/api/product/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='w-full max-w-7xl mx-auto px-1 sm:px-4 py-4 sm:py-8'>
      <div className='bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-2xl sm:rounded-[2rem] p-3.5 sm:p-10 shadow-xl shadow-slate-200/50'>
        
        {/* Header Title */}
        <div className='mb-5 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4'>
          <div className='flex-1'>
            <span className='inline-block px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase mb-1.5 shadow-xs'>
              Catalog Overview
            </span>
            <h1 className='text-xl sm:text-3xl font-black text-slate-900 tracking-tight'>All Products List</h1>
          </div>
          <span className='text-[11px] sm:text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl w-fit'>
            Total: {list.length} items
          </span>
        </div>

        {/* List Table Container */}
        <div className='flex flex-col gap-2.5 sm:gap-3'>
          
          {/* Table Header - Desktop Only */}
          <div className='hidden md:grid grid-cols-[1fr_3fr_1.5fr_1fr_1fr] items-center py-3 px-4 bg-slate-50 border border-slate-200/60 rounded-2xl text-xs font-black uppercase tracking-wider text-slate-500'>
            <span>Image</span>
            <span>Product Name</span>
            <span>Category</span>
            <span>Price</span>
            <span className='text-center'>Action</span>
          </div>

          {/* Loading State */}
          {loading && (
            <div className='text-center py-10 sm:py-12 text-slate-400 font-medium text-sm'>
              Loading products...
            </div>
          )}

          {/* Empty State */}
          {!loading && list.length === 0 && (
            <div className='text-center py-10 sm:py-12 text-slate-400 font-medium text-sm'>
              No products found in store.
            </div>
          )}

          {/* Product Items */}
          {!loading && list.map((item, index) => (
            <div 
              key={index}
              className='grid grid-cols-[auto_1fr] md:grid-cols-[1fr_3fr_1.5fr_1fr_1fr] items-center gap-x-3.5 sm:gap-x-4 p-3 sm:p-3.5 bg-white border border-slate-200/70 rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all duration-200'
            >
              {/* Product Image with Rounded Corners */}
              <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/60 shrink-0 flex items-center justify-center p-1.5 shadow-inner'>
                <img className='w-full h-full object-contain rounded-xl' src={item.image[0]} alt={item.name} />
              </div>

              {/* Product Details Group - Mobile Layout */}
              <div className='flex flex-col md:hidden flex-1 pr-1'>
                <p className='text-[13px] sm:text-sm font-bold text-slate-800 line-clamp-1'>{item.name}</p>
                <div className='flex items-center gap-2 mt-1'>
                  <span className='text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded'>{item.category}</span>
                  <span className='text-xs font-black text-indigo-600'>{currency}{item.price}</span>
                </div>
              </div>

              {/* Desktop Columns */}
              <p className='hidden md:block text-sm font-bold text-slate-800 line-clamp-2 flex-1'>{item.name}</p>
              <p className='hidden md:block text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg w-fit'>
                {item.category}
              </p>
              <p className='hidden md:block text-sm font-black text-indigo-600'>{currency}{item.price}</p>

              {/* Action Button */}
              <div className='col-span-2 md:col-span-1 flex justify-end md:justify-center pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 mt-1 md:mt-0'>
                <button 
                  onClick={() => removeProduct(item._id)} 
                  className='p-2 sm:p-2.5 rounded-xl bg-rose-50/50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1.5 text-xs font-bold shadow-xs'
                  title="Delete Product"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default List;