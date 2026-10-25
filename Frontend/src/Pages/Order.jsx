import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import axios from 'axios';

const Order = () => {
  const { backendUrl, token, currency, navigate } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      
      {/* Header Title */}
      <div className='text-2xl sm:text-3xl font-extrabold mb-8 pb-4 border-b border-gray-100'>
        <Title text1={'MY'} text2={' ORDERS'} />
      </div>

      {/* Orders List / Empty State */}
      {orderData.length === 0 ? (
        <div className='flex flex-col items-center justify-center py-20 text-center bg-gray-50/50 rounded-3xl border border-dashed border-gray-200'>
          <div className='w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 text-3xl shadow-sm'>
            📦
          </div>
          <h3 className='text-xl font-bold text-slate-900 mb-2'>No Orders Found</h3>
          <p className='text-gray-500 text-sm mb-6 max-w-sm'>
            You haven't placed any orders yet. Start exploring our collections and place your first order!
          </p>
          <button
            onClick={() => navigate('/collection')}
            className='bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300'
          >
            Explore Collections
          </button>
        </div>
      ) : (
        <div className='space-y-5'>
          {orderData.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-3xl p-6 sm:p-7 border border-gray-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'
            >
              {/* Left: Product Image & Details */}
              <div className='flex items-start sm:items-center gap-5 sm:gap-6 flex-1 min-w-0'>
                <div className='w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex-shrink-0 shadow-inner'>
                  <img
                    className='w-full h-full object-cover object-center'
                    src={item.image[0]}
                    alt={item.name}
                  />
                </div>

                <div className='space-y-1.5 flex-1 min-w-0'>
                  <p className='text-base sm:text-lg font-bold text-slate-900 truncate'>
                    {item.name}
                  </p>

                  <div className='flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-700'>
                    <span className='text-indigo-600 font-black text-base'>
                      {currency}{item.price}
                    </span>
                    <span className='text-gray-400'>|</span>
                    <span className='text-gray-600 font-medium'>Quantity: {item.quantity}</span>
                    <span className='text-gray-400'>|</span>
                    <span className='px-2.5 py-0.5 text-xs font-bold bg-gray-100 border border-gray-200 rounded-md uppercase'>
                      Size: {item.size}
                    </span>
                  </div>

                  <div className='flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 pt-1'>
                    <p>
                      Date: <span className='font-medium text-slate-700'>{new Date(item.date).toDateString()}</span>
                    </p>
                    <p>
                      Payment: <span className='font-medium text-slate-700 uppercase'>{item.paymentMethod}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Status & Track Order Button */}
              <div className='flex items-center justify-between lg:justify-end w-full lg:w-auto gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-100'>
                <div className='flex items-center gap-2.5 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-2xl'>
                  <span className='w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse'></span>
                  <span className='text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-wide'>
                    {item.status}
                  </span>
                </div>

                <button
                  onClick={loadOrderData}
                  className='bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-2xl shadow-md hover:bg-indigo-600 transition-all duration-300 transform active:scale-95'
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Order;