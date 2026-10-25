import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      
      {/* Top Header Title */}
      <div className='text-center pt-6 pb-4'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      {/* Main Hero Story Section */}
      <div className='my-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
        
        {/* About Image with Modern Frame */}
        <div className='w-full lg:w-1/2'>
          <div className='relative rounded-3xl overflow-hidden shadow-2xl bg-gray-50 border border-gray-100'>
            <img 
              className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700' 
              src={assets.about_img} 
              alt='About Us' 
            />
          </div>
        </div>

        {/* About Text Content */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center gap-5 text-gray-600 text-sm sm:text-base leading-relaxed'>
          <p className='p-4 bg-indigo-50/60 border-l-4 border-indigo-600 rounded-r-2xl italic text-gray-700 font-medium'>
            “We started with a simple site on Shopify ten years ago and have been able to expand since then. The customer service is friendly, simple and accessible for small businesses that want to grow.”
          </p>
          <p>
            E-commerce (electronic commerce) is the activity of electronically buying or selling products on online services or over the Internet.
          </p>
          <p className='text-gray-500'>
            “We started with a simple site on Shopify ten years ago and have been able to expand since then. The customer service is friendly, simple and accessible for small businesses that want to grow.”
          </p>
          
          <div className='pt-2'>
            <b className='text-slate-900 text-lg font-bold tracking-tight block mb-2'>Our Mission</b>
            <p>
              “To become essential to our customers by providing differentiated products and services to help them achieve their aspirations.” 
              With a wide range of potential and current customers, American Express manages to help everyone feel included in its mission statement. It is offering products and services for all, no matter what your income level, elite status or dreams may be.
            </p>
          </div>
        </div>

      </div>

      {/* Why Choose Us Section Header */}
      <div className='text-center pt-16 pb-8'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>

      {/* Why Choose Us Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
        
        {/* Card 1 */}
        <div className='bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group'>
          <div className='space-y-4'>
            <div className='w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors'>
              01
            </div>
            <b className='text-lg font-bold text-slate-900 block'>Quality Assurance</b>
            <p className='text-gray-600 text-sm leading-relaxed'>
              The primary objectives of e-commerce quality control are to enhance customer satisfaction, minimize returns and complaints, and protect the reputation of the online business.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group'>
          <div className='space-y-4'>
            <div className='w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg group-hover:bg-purple-600 group-hover:text-white transition-colors'>
              02
            </div>
            <b className='text-lg font-bold text-slate-900 block'>Convenience</b>
            <p className='text-gray-600 text-sm leading-relaxed'>
              One of the most significant advantages of ecommerce is the ability to reach a global audience.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group'>
          <div className='space-y-4'>
            <div className='w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-lg group-hover:bg-pink-600 group-hover:text-white transition-colors'>
              03
            </div>
            <b className='text-lg font-bold text-slate-900 block'>Exceptional Customer Service</b>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Ecommerce customer service is providing assistance to customers throughout their online shopping journey. It includes answering product queries, resolving issues, processing returns, and pro
            </p>
          </div>
        </div>

      </div>

      {/* Newsletter Section */}
      <NewsLetterBox />

    </div>
  )
}

export default About