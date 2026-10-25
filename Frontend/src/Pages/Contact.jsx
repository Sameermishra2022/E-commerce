import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      
      {/* Header Title */}
      <div className='text-center pt-6 pb-4 border-t border-gray-100'>
        <Title text1={'CONTACT'} text2={' US'} />
      </div>

      {/* Main Contact Section */}
      <div className='my-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24'>
        
        {/* Contact Image with Modern Frame */}
        <div className='w-full lg:w-1/2'>
          <div className='relative rounded-3xl overflow-hidden shadow-2xl bg-gray-50 border border-gray-100'>
            <img 
              className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700' 
              src={assets.contact_img} 
              alt='Contact Us' 
            />
          </div>
        </div>

        {/* Contact Information & Actions */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-start gap-8'>
          
          {/* Store Info Card */}
          <div className='w-full bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4'>
            <p className='font-extrabold text-lg text-slate-900 tracking-tight flex items-center gap-2'>
              <span className='w-2.5 h-2.5 rounded-full bg-indigo-600'></span>
              Our Store
            </p>
            <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
              1 JBS Haldane Avenue, <br />
              Kolkata, West Bengal 700046
            </p>
            <div className='pt-2 border-t border-gray-100 text-sm sm:text-base text-gray-600 space-y-1'>
              <p><span className='font-semibold text-slate-900'>Tel:</span> 9436462678</p>
              <p><span className='font-semibold text-slate-900'>Email:</span> mystore@gmail.com</p>
            </div>
          </div>

          {/* Careers Card */}
          <div className='w-full bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4'>
            <p className='font-extrabold text-lg text-slate-900 tracking-tight flex items-center gap-2'>
              <span className='w-2.5 h-2.5 rounded-full bg-purple-600'></span>
              Careers at Forever
            </p>
            <p className='text-gray-600 text-sm sm:text-base'>
              Learn more about our teams and job openings.
            </p>
            <div className='pt-2'>
              <button className='bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-2xl shadow-xl hover:bg-indigo-600 transition-all duration-300 transform active:scale-95'>
                Explore Jobs
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Newsletter Section */}
      <NewsLetterBox />

    </div>
  );
};

export default Contact;