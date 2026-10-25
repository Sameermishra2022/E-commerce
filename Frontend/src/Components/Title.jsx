import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex items-center gap-3 mb-3'>
      {/* Gradient Title Text */}
      <h2 className='text-2xl sm:text-3xl font-extrabold tracking-tight'>
        <span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent'>
          {text1}
        </span>
        <span className='bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent ml-2'>
          {text2}
        </span>
      </h2>

     
    </div>
  )
}

export default Title