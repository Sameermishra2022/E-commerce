import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../Context/ShopContext';
import RelatedProduct from '../Components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  const fetchProductData = async () => {
    if (products && products.length > 0) {
      const item = products.find((p) => p._id === productId);
      if (item) {
        setProductData(item);
        // Ensure image is safely picked from array or string
        const firstImg = Array.isArray(item.image) ? item.image[0] : item.image;
        setImage(firstImg);
      }
    }
  };

  useEffect(() => {
    fetchProductData();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Page change par top par scroll karega
  }, [productId, products]);

  return productData ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-all ease-in-out duration-500 overflow-hidden">
      
      {/* Top Product Hero Showcase Section */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-14 items-start w-full">
        
        {/* Left Side: Images Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col-reverse sm:flex-row gap-4 items-start">
          
          {/* Thumbnails List */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-start sm:w-24 w-full gap-3 shrink-0 no-scrollbar max-h-[500px] p-1">
            {Array.isArray(productData.image) && productData.image.map((item, index) => (
              <div
                key={index}
                onClick={() => setImage(item)}
                className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 h-20 w-20 sm:w-full sm:h-24 bg-gray-50 shrink-0 ${
                  item === image
                    ? 'border-indigo-600 ring-2 ring-indigo-100 shadow-md scale-95'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img src={item} alt="" className="w-full h-full object-cover object-top rounded-2xl" />
              </div>
            ))}
          </div>

          {/* Main Showcase Image Container with Sharp Rendering & No Blur */}
          <div className="w-full flex-1 bg-gray-50/90 rounded-3xl overflow-hidden border border-gray-100 shadow-xl flex items-center justify-center p-3 h-[420px] sm:h-[520px]">
            <img
              src={image}
              alt={productData.name}
              className="w-full h-full object-cover object-top rounded-2xl overflow-hidden"
              style={{ 
                imageRendering: '-webkit-optimize-contrast',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            />
          </div>
        </div>

        {/* Right Side: Product Meta Details */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <span className="text-[10px] sm:text-xs font-black tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
              IN STOCK
            </span>
            <h1 className="font-extrabold text-2xl sm:text-4xl text-slate-900 mt-3 tracking-tight leading-tight">
              {productData.name}
            </h1>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_icon} alt="" className="w-4 h-4" />
              <img src={assets.star_dull_icon} alt="" className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-500 pl-1">(122 Customer Reviews)</span>
          </div>

          {/* Price */}
          <div className="text-3xl sm:text-4xl font-black text-indigo-600">
            {currency}{productData.price}
          </div>

          {/* Description Short */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {productData.description}
          </p>

          <hr className="border-gray-100" />

          {/* Size Options */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">Select Size</p>
              <span className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer">Size Guide</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {productData.sizes && productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`py-2.5 px-5 rounded-2xl text-xs sm:text-sm font-bold border transition-all duration-300 ${
                    item === size
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-105'
                      : 'border-gray-200 bg-white text-slate-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add To Cart Button */}
          <button
            onClick={() => {
              if (!size) {
                alert('Please select a product size first!');
                return;
              }
              addToCart(productData._id, size);
            }}
            className="w-full bg-slate-900 text-white font-extrabold text-xs uppercase tracking-widest py-4.5 rounded-2xl shadow-xl hover:bg-indigo-600 hover:shadow-indigo-200 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3 mt-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>ADD TO CART</span>
          </button>

          {/* Trust Guarantees */}
          <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-gray-600">
            <div className="flex items-center gap-2 p-3 bg-gray-50/80 rounded-2xl border border-gray-100">
              <span className="text-emerald-500 font-bold">✓</span> 100% Original
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-50/80 rounded-2xl border border-gray-100">
              <span className="text-emerald-500 font-bold">✓</span> Cash On Delivery
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-50/80 rounded-2xl border border-gray-100">
              <span className="text-emerald-500 font-bold">✓</span> 7 Days Easy Return
            </div>
          </div>
        </div>
      </div>

      {/* Description & Reviews Tabs Section */}
      <div className="mt-20 bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden">
        <div className="flex border-b border-gray-100 bg-gray-50/50">
          <button
            onClick={() => setActiveTab('description')}
            className={`px-8 py-4 text-xs font-black uppercase tracking-wider transition-all ${
              activeTab === 'description'
                ? 'border-b-2 border-indigo-600 text-indigo-600 bg-white'
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-8 py-4 text-xs font-black uppercase tracking-wider transition-all ${
              activeTab === 'reviews'
                ? 'border-b-2 border-indigo-600 text-indigo-600 bg-white'
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            Reviews (122)
          </button>
        </div>

        <div className="p-6 sm:p-8 text-sm sm:text-base text-gray-600 leading-relaxed space-y-4">
          {activeTab === 'description' ? (
            <>
              <p>{productData.description}</p>
            </>
          ) : (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-slate-900">John Doe</p>
                  <span className="text-xs text-gray-400 font-medium">2 days ago</span>
                </div>
                <p className="text-gray-600 text-sm">Amazing quality! Fits perfectly and fabric feels very premium.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-20">
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </div>

    </div>
  ) : (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Product;