import React from 'react'
import { Link } from 'react-router-dom'
import New_Hero_Img from '../assets/New_Hero_Img.png'

const perks = [
  { title: 'Free Delivery', text: 'On orders above ₹999', icon: '🚚' },
  { title: 'Easy Returns', text: '7-day return policy', icon: '🔄' },
  { title: 'Secure Payment', text: 'UPI, Cards & COD', icon: '🛡️' },
]

const Hero = () => {
  const scrollToCollection = () => {
    const section = document.getElementById('latest-collection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative max-w-7xl mx-auto mt-2 sm:mt-4 px-3 sm:px-8'>
      <div className='relative flex flex-col lg:flex-row items-center justify-between overflow-hidden rounded-3xl bg-[#eaf5fd] border border-slate-200/60 shadow-sm'>
        
        {/* Left Side: Content */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12 lg:p-16 z-10'>
          <div className='inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100/80 text-sky-800 text-[11px] sm:text-xs font-semibold tracking-wide w-fit'>
            <span className='w-2 h-2 rounded-full bg-sky-500 animate-pulse' />
            NEW SEASON ARRIVALS
          </div>

          {/* Heading Fix: Added pb-2 & leading-snug to prevent 'y' clipping */}
          <h1 className='mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-snug'>
            Elevate Your <span className='inline-block whitespace-nowrap pb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600'>Everyday Style</span>
          </h1>

          <p className='mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base max-w-md leading-relaxed'>
            Discover handpicked luxury apparel designed for elegance and comfort. Enjoy exclusive discounts up to 30% off.
          </p>

          {/* CTA Buttons - Mobile Compact */}
          <div className='mt-6 sm:mt-8 flex items-center gap-2.5 sm:gap-4'>
            <button
              onClick={scrollToCollection}
              className='px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all active:scale-95 shadow-md cursor-pointer whitespace-nowrap'
            >
              Shop Collection
            </button>
            <Link
              to='/about'
              className='px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-white text-slate-700 font-semibold text-xs sm:text-sm border border-slate-200 hover:bg-slate-50 transition-all whitespace-nowrap'
            >
              Explore Story
            </Link>
          </div>

          {/* Perks Section */}
          <div className='mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4'>
            {perks.map((perk) => (
              <div key={perk.title} className='flex items-start gap-2.5 p-1 rounded-xl transition-colors hover:bg-white/50'>
                <span className='text-base sm:text-xl'>{perk.icon}</span>
                <div>
                  <p className='text-xs font-bold text-slate-900'>{perk.title}</p>
                  <p className='text-[10px] sm:text-[11px] text-slate-500 mt-0.5'>{perk.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Hero Visual */}
        <div className='relative w-full lg:w-1/2 flex items-end justify-center min-h-[360px] sm:min-h-[500px] lg:min-h-[580px] pt-4 lg:pt-0'>
          
          {/* Blue Blurred Backdrop Circle */}
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full bg-[#369ee9]/25 blur-3xl z-0' />

          {/* Model Image */}
          <img
            src={New_Hero_Img}
            alt='Latest Collection Showcase'
            className='relative z-10 max-h-[380px] sm:max-h-[520px] lg:max-h-[580px] object-contain drop-shadow-xl'
          />

          {/* Offer Badge */}
          <div className='absolute top-2 right-2 sm:top-8 sm:right-8 z-20 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-lg'>
            <span className='text-[8px] sm:text-[10px] font-bold tracking-wider text-slate-400 uppercase'>Up To</span>
            <span className='text-base sm:text-2xl font-black text-slate-900'>30% OFF</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero