import React, { useState } from 'react';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-12 bg-gray-50/30'>
      <div className='w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-2xl flex flex-col gap-6 relative overflow-hidden'>
        
        {/* Background Decorative Glow */}
        <div className='absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none'></div>
        <div className='absolute -bottom-16 -left-16 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none'></div>

        {/* Header Title */}
        <div className='text-center space-y-2'>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight'>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <div className='flex items-center justify-center gap-2 pt-1'>
            <span className='h-1 w-12 bg-indigo-600 rounded-full'></span>
            <span className='h-1 w-3 bg-pink-500 rounded-full'></span>
          </div>
        </div>

        {/* Form Fields Container */}
        <div className='flex flex-col gap-4 pt-2'>
          {!isLogin && (
            <div className='space-y-1.5'>
              <label className='text-xs font-bold uppercase tracking-wider text-gray-500 ml-1'>Full Name</label>
              <input
                type='text'
                placeholder='Enter your name'
                className='w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all'
              />
            </div>
          )}

          <div className='space-y-1.5'>
            <label className='text-xs font-bold uppercase tracking-wider text-gray-500 ml-1'>Email Address</label>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all'
            />
          </div>

          <div className='space-y-1.5'>
            <label className='text-xs font-bold uppercase tracking-wider text-gray-500 ml-1'>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              className='w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all'
            />
          </div>
        </div>

        {/* Action Button */}
        <button className='w-full bg-slate-900 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-2xl shadow-xl hover:bg-indigo-600 hover:shadow-indigo-200 transition-all duration-300 transform active:scale-95'>
          {isLogin ? 'Sign In' : 'Continue'}
        </button>

        {/* Toggle Mode Link */}
        <p className='text-center text-sm font-medium text-gray-600'>
          {isLogin ? "Don't have an account? " : "Already have an Account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className='text-indigo-600 font-bold cursor-pointer hover:underline'
          >
            {isLogin ? 'Sign Up' : 'Login Here'}
          </span>
        </p>

        {/* Terms & Privacy Policy Checkbox */}
        <div className='flex items-start gap-3 pt-2 border-t border-gray-100'>
          <input
            type='checkbox'
            id='terms'
            className='mt-1 w-4 h-4 accent-indigo-600 rounded cursor-pointer'
          />
          <label htmlFor='terms' className='text-xs text-gray-500 leading-relaxed cursor-pointer select-none'>
            By continuing, I agree to the <span className='text-gray-700 font-semibold'>terms of use</span> and <span className='text-gray-700 font-semibold'>privacy policy</span>.
          </label>
        </div>

      </div>
    </div>
  );
};

export default LoginSignup;