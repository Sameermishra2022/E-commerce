import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/Hero-Image.png'

// Edit these to match your store's real policies
const perks = [
  { title: 'Free delivery', text: 'On orders above ₹999' },
  { title: 'Easy returns', text: '7-day return policy' },
  { title: 'Secure payment', text: 'UPI, cards and COD' },
]

const Hero = () => {
  return (
    <section className='relative flex flex-col sm:flex-row items-stretch overflow-hidden rounded-3xl bg-[#eaf5fd]'>
      {/* Text side */}
      <div className='w-full sm:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 sm:py-16'>
        <p className='text-base sm:text-lg text-[#14304a]/70'>
          New season styles
        </p>
        <h1 className='mt-3 text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-[#14304a]'>
          Latest Arrivals
        </h1>
        <p className='mt-5 max-w-sm text-base text-[#14304a]/70'>
          Fresh outfits picked for this season, with up to 30% off on selected styles.
        </p>
        <div>
          <Link
            to='/collection'
            className='mt-8 inline-block rounded-full bg-[#14304a] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#1d4a73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369ee9]'
          >
            Shop now
          </Link>
        </div>

        <ul className='mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#14304a]/10 pt-6'>
          {perks.map((perk) => (
            <li key={perk.title}>
              <p className='text-sm font-medium text-[#14304a]'>{perk.title}</p>
              <p className='text-sm text-[#14304a]/60'>{perk.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Image side */}
      <div className='relative w-full sm:w-1/2 min-h-[440px] flex items-end justify-center'>
        <div className='relative isolate h-[440px] sm:h-[580px] lg:h-[660px]'>
          {/* Circle: behind the image, starts below the face */}
          <div className='absolute bottom-0 left-1/2 z-0 h-[72%] aspect-square -translate-x-1/2 rounded-full bg-[#369ee9]/25' />

          <img
            src={heroImage}
            alt='Woman wearing a blazer and trousers from the latest collection'
            className='relative z-10 block h-full w-auto max-w-full object-contain'
          />
        </div>

        {/* Offer badge */}
        <div className='absolute top-6 right-6 sm:top-10 sm:right-10 z-20 rounded-2xl bg-white px-5 py-3 shadow-md'>
          <p className='text-xs text-[#14304a]/60'>Up to</p>
          <p className='text-2xl font-semibold text-[#14304a]'>30% off</p>
        </div>
      </div>
    </section>
  )
}

export default Hero