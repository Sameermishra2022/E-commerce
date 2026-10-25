import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Title */}
      <div className="text-2xl sm:text-3xl font-extrabold mb-8 pb-4 border-b border-gray-100">
        <Title text1={'YOUR'} text2={' CART'} />
      </div>

      {/* Cart Content Area */}
      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
          <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 text-3xl">
            🛒
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Your Cart is Empty</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-sm">
            Looks like you haven't added anything to your cart yet. Explore our latest collection and find something you love!
          </p>
          <button
            onClick={() => navigate('/collection')}
            className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          
          {/* Cart Products List */}
          <div className="flex-1 w-full space-y-5">
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);

              if (!productData) return null;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100/90 shadow-md shadow-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                >
                  {/* Left: Image & Info */}
                  <div className="flex items-center gap-5 sm:gap-6 flex-1 min-w-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex-shrink-0 shadow-inner">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={productData.image[0]}
                        alt={productData.name}
                      />
                    </div>

                    <div className="space-y-2 flex-1 min-w-0">
                      <p className="text-base sm:text-lg font-bold text-slate-900 truncate">
                        {productData.name}
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-base sm:text-lg font-black text-indigo-600">
                          {currency}{productData.price}
                        </span>
                        
                        <span className="px-3 py-1 text-xs font-bold text-slate-700 bg-gray-100 border border-gray-200 rounded-lg uppercase">
                          Size: {item.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Controls: Quantity Input & Delete Button */}
                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-5 border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide sm:hidden">Qty:</span>
                      <input
                        onChange={(e) =>
                          e.target.value === '' || e.target.value === '0'
                            ? null
                            : updateQuantity(item._id, item.size, Number(e.target.value))
                        }
                        className="w-16 sm:w-20 border border-gray-200 rounded-xl px-3 py-2 text-center text-sm font-bold text-slate-800 bg-gray-50/50 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                      />
                    </div>

                    <button
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="p-3 rounded-xl bg-rose-50/80 hover:bg-rose-100 text-rose-600 transition-colors duration-200 flex items-center justify-center shadow-sm"
                      title="Remove Item"
                    >
                      <img className="w-4 h-4 sm:w-5 sm:h-5 filter invert-[0.3] sepia-[1] saturate-[5] hue-rotate-[320deg]" src={assets.bin_icon} alt="Delete" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Checkout Summary Side Panel */}
          <div className="w-full lg:w-[420px] flex-shrink-0 space-y-6">
            <CartTotal />

            <button
              onClick={() => navigate('/place-order')}
              className="w-full bg-slate-900 text-white font-extrabold text-xs uppercase tracking-widest py-4.5 rounded-2xl shadow-xl hover:bg-indigo-600 hover:shadow-indigo-200 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>PROCEED TO CHECKOUT</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;