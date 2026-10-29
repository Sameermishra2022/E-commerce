
import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Custom Dropdown States
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [subCategoryOpen, setSubCategoryOpen] = useState(false);

  const categoryRef = useRef(null);
  const subCategoryRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target)
      ) {
        setCategoryOpen(false);
      }

      if (
        subCategoryRef.current &&
        !subCategoryRef.current.contains(event.target)
      ) {
        setSubCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('sizes', JSON.stringify(sizes));
      formData.append('bestseller', bestSeller);

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(
        backendurl + '/api/product/add',
        formData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
        setSizes([]);
        setBestSeller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50">

        {/* Header Title */}
        <div className="mb-8 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase mb-3 shadow-xs">
              Catalog Management
            </span>

            <h1 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Add New Product
            </h1>
          </div>
        </div>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">

          {/* Upload Image Section */}
          <div>
            <p className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              Upload Product Images (Up to 4)
            </p>

            {/* Two Images Per Row on Mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
              {[image1, image2, image3, image4].map((img, index) => {
                const id = `image${index + 1}`;

                const setImageFn = [
                  setImage1,
                  setImage2,
                  setImage3,
                  setImage4,
                ][index];

                return (
                  <label
                    key={id}
                    htmlFor={id}
                    className="group relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-2xl bg-slate-50/50 hover:bg-indigo-50/35 cursor-pointer transition-all overflow-hidden shadow-xs"
                  >
                    <img
                      className={`${
                        !img
                          ? 'w-8 h-8 opacity-40 group-hover:scale-110'
                          : 'w-full h-full object-cover'
                      } transition-transform duration-300`}
                      src={!img ? assets.upload : URL.createObjectURL(img)}
                      alt="Upload slot"
                    />

                    <input
                      onChange={(e) =>
                        setImageFn(e.target.files[0])
                      }
                      type="file"
                      id={id}
                      accept="image/*"
                      hidden
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Product Name */}
          <div className="w-full">
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Product Name
            </label>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full max-w-xl px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
              type="text"
              placeholder="e.g. Modern Minimalist Leather Jacket"
              required
            />
          </div>

          {/* Product Description */}
          <div className="w-full">
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Product Description
            </label>

            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              rows={4}
              className="w-full max-w-xl px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all resize-none"
              placeholder="Provide details about materials, fit, features, and care instructions..."
              required
            />
          </div>

          {/* Category, SubCategory & Price Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl relative">

            {/* Custom Category Dropdown */}
            <div className="relative" ref={categoryRef}>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Category
              </label>

              <div
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 text-sm font-medium flex items-center justify-between cursor-pointer select-none hover:border-indigo-500 transition-all"
              >
                <span>{category}</span>

                <svg
                  className={`w-4 h-4 text-slate-500 transition-transform ${
                    categoryOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {categoryOpen && (
                <div className="absolute z-20 top-full left-0 mt-2 w-full bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden py-1">
                  {['Men', 'Women', 'Kids'].map((cat) => (
                    <div
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        setCategoryOpen(false);
                      }}
                      className={`px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                        category === cat
                          ? 'bg-indigo-50 text-indigo-600 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Custom SubCategory Dropdown */}
            <div className="relative" ref={subCategoryRef}>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Sub Category
              </label>

              <div
                onClick={() => setSubCategoryOpen(!subCategoryOpen)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 text-sm font-medium flex items-center justify-between cursor-pointer select-none hover:border-indigo-500 transition-all"
              >
                <span>{subCategory}</span>

                <svg
                  className={`w-4 h-4 text-slate-500 transition-transform ${
                    subCategoryOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {subCategoryOpen && (
                <div className="absolute z-20 top-full left-0 mt-2 w-full bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden py-1">
                  {['Topwear', 'Bottomwear', 'Winterwear'].map((sub) => (
                    <div
                      key={sub}
                      onClick={() => {
                        setSubCategory(sub);
                        setSubCategoryOpen(false);
                      }}
                      className={`px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                        subCategory === sub
                          ? 'bg-indigo-50 text-indigo-600 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Price */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Product Price ($)
              </label>

              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                type="number"
                placeholder="99"
                required
              />
            </div>
          </div>

          {/* Product Sizes */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Product Sizes
            </label>

            <div className="flex flex-wrap gap-2.5">
              {['S', 'M', 'L', 'XL', 'XXL'].map((item) => {
                const isSelected = sizes.includes(item);

                return (
                  <div
                    key={item}
                    onClick={() =>
                      setSizes((prev) =>
                        isSelected
                          ? prev.filter((s) => s !== item)
                          : [...prev, item]
                      )
                    }
                    className={`px-5 py-2.5 rounded-xl font-black text-xs cursor-pointer transition-all duration-200 select-none shadow-xs ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-indigo-600/30 scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bestseller Checkbox */}
          <div className="flex items-center gap-3 pt-2">
            <input
              onChange={() => setBestSeller((prev) => !prev)}
              checked={bestSeller}
              type="checkbox"
              id="bestseller"
              className="w-5 h-5 accent-indigo-600 rounded-md cursor-pointer"
            />

            <label
              className="cursor-pointer text-sm font-bold text-slate-700 select-none"
              htmlFor="bestseller"
            >
              Add to Bestseller Collection
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-black text-xs sm:text-sm tracking-wider uppercase rounded-2xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? 'Adding Product...' : 'Add Product'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Add;
