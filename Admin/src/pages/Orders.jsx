import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { backendurl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRef = useRef(null);

  const fetchAllOrders = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const response = await axios.post(backendurl + '/api/order/list', {}, { headers: { token } });
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const statusHandler = async (newStatus, orderId) => {
    try {
      const response = await axios.post(backendurl + '/api/order/status', { orderId, status: newStatus }, { headers: { token } });
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Order status updated successfully!");
        setOpenDropdownId(null);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const statuses = ["Order Placed", "Packing", "Shipped", "Out for Delivery", "Delivered"];

  return (
    <div className='w-full max-w-7xl mx-auto px-1 sm:px-4 py-4 sm:py-8'>
      <div className='bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-2xl sm:rounded-[2rem] p-3.5 sm:p-10 shadow-xl shadow-slate-200/50'>
        
        {/* Header Title */}
        <div className='mb-5 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4'>
          <div className='flex-1'>
            <span className='inline-block px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase mb-1.5 shadow-xs'>
              Store Fulfillment
            </span>
            <h1 className='text-xl sm:text-3xl font-black text-slate-900 tracking-tight'>Customer Orders</h1>
          </div>
          <span className='text-[11px] sm:text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl w-fit'>
            Total Orders: {orders.length}
          </span>
        </div>

        {/* Loading State */}
        {loading && (
          <div className='text-center py-12 text-slate-400 font-medium text-sm'>
            Loading orders...
          </div>
        )}

        {/* Empty State */}
        {!loading && orders.length === 0 && (
          <div className='text-center py-12 text-slate-400 font-medium text-sm'>
            No orders found yet.
          </div>
        )}

        {/* Orders List Container */}
        <div className='flex flex-col gap-4'>
          {orders.map((order, index) => (
            <div 
              key={index} 
              className='grid grid-cols-1 lg:grid-cols-[0.5fr_2fr_1fr_1fr] gap-4 items-start bg-white border border-slate-200/70 p-4 sm:p-6 rounded-2xl sm:rounded-3xl hover:border-indigo-300 hover:shadow-md transition-all duration-200 text-xs sm:text-sm text-slate-700'
            >
              
              {/* Parcel Icon Box */}
              <div className='flex items-center gap-3 lg:block'>
                <div className='w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0'>
                  <img className='w-6 h-6 object-contain' src={assets.parcel} alt='Parcel' />
                </div>
                <div className='lg:hidden'>
                  <p className='text-xs font-black text-slate-900'>Order #{index + 1}</p>
                  <p className='text-[11px] font-medium text-slate-400'>{new Date(order.date).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Order Items & Customer Address */}
              <div className='flex flex-col gap-3'>
                
                {/* Items List */}
                <div className='bg-slate-50/80 p-3 rounded-xl border border-slate-100'>
                  <p className='text-xs font-black text-indigo-600 uppercase tracking-wider mb-1'>Ordered Items:</p>
                  {order.items.map((item, i) => (
                    <p className='py-0.5 font-bold text-slate-800 text-xs sm:text-sm flex items-center justify-between' key={i}>
                      <span>{item.name} <span className='text-indigo-600 font-black'>x {item.quantity}</span></span>
                      <span className='bg-white px-2 py-0.5 rounded border border-slate-200 text-[11px] font-semibold text-slate-600'>{item.size}</span>
                    </p>
                  ))}
                </div>

                {/* Customer Details */}
                <div>
                  <p className='font-black text-slate-900 text-sm'>{order.address.firstName + " " + order.address.lastName}</p>
                  <div className='text-slate-600 mt-1 space-y-0.5 text-xs font-medium'>
                    <p>{order.address.street},</p>
                    <p>{order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}</p>
                    <p className='text-indigo-600 font-bold pt-0.5'>📞 {order.address.phone}</p>
                  </div>
                </div>

              </div>

              {/* Order Meta Info */}
              <div className='flex flex-col gap-2 bg-slate-50/50 p-3.5 rounded-2xl border border-slate-100'>
                <div className='flex justify-between lg:block'>
                  <span className='text-slate-500 font-medium lg:hidden'>Items:</span>
                  <p className='font-bold text-slate-800'>📦 Total Items: <span className='text-indigo-600'>{order.items.length}</span></p>
                </div>

                <div className='flex justify-between lg:block'>
                  <span className='text-slate-500 font-medium lg:hidden'>Method:</span>
                  <p className='font-bold text-slate-800'>💳 Method: <span className='uppercase text-slate-600'>{order.paymentMethod}</span></p>
                </div>

                <div className='flex justify-between lg:block'>
                  <span className='text-slate-500 font-medium lg:hidden'>Payment:</span>
                  <p className='font-bold text-slate-800'>
                    💰 Payment: <span className={`px-2 py-0.5 rounded text-[11px] font-black ${order.payment ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-amber-50 text-amber-600 border border-amber-200'}`}>
                      {order.payment ? 'DONE' : 'PENDING'}
                    </span>
                  </p>
                </div>

                <div className='flex justify-between lg:block'>
                  <span className='text-slate-500 font-medium lg:hidden'>Date:</span>
                  <p className='font-medium text-slate-500 text-xs hidden lg:block'>📅 {new Date(order.date).toLocaleDateString()}</p>
                </div>

                {/* Total Amount */}
                <div className='pt-2 border-t border-slate-200/60 flex items-center justify-between lg:flex-col lg:items-start'>
                  <span className='text-xs font-bold text-slate-500'>Amount</span>
                  <p className='text-base sm:text-lg font-black text-indigo-600'>{currency}{order.amount}</p>
                </div>
              </div>

              {/* Custom Popup Dropdown Section matching reference */}
              <div className='flex flex-col gap-2 justify-center relative' ref={dropdownRef}>
                <label className='text-xs font-bold text-slate-500'>Update Status</label>
                
                {/* Dropdown Toggle Button */}
                <div 
                  onClick={() => setOpenDropdownId(openDropdownId === order._id ? null : order._id)}
                  className={`w-full px-4 py-3 rounded-2xl bg-white border transition-all cursor-pointer shadow-sm flex items-center justify-between ${openDropdownId === order._id ? 'border-indigo-600 ring-2 ring-indigo-500/20' : 'border-slate-200/80 hover:border-indigo-300'}`}
                >
                  <span className='text-xs sm:text-sm font-bold text-slate-800'>{order.status}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 text-indigo-600 transition-transform duration-200 ${openDropdownId === order._id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Dropdown Options Popup List */}
                {openDropdownId === order._id && (
                  <div className='absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden z-20 py-1.5 animate-in fade-in zoom-in-95 duration-150'>
                    {statuses.map((statusOption, sIndex) => (
                      <div
                        key={sIndex}
                        onClick={() => statusHandler(statusOption, order._id)}
                        className={`px-4 py-2.5 text-xs sm:text-sm font-bold cursor-pointer transition-colors flex items-center justify-between ${order.status === statusOption ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-slate-50'}`}
                      >
                        <span>{statusOption}</span>
                        {order.status === statusOption && (
                          <span className='w-2 h-2 rounded-full bg-indigo-600'></span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Orders;