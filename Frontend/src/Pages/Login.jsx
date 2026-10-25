import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);

  return (
    <div className='min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-12'>
      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-2xl flex flex-col gap-6 relative overflow-hidden'
      >
        {/* Background Decorative Glow */}
        <div className='absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none'></div>
        <div className='absolute -bottom-16 -left-16 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none'></div>

        {/* Header Title */}
        <div className='text-center space-y-2'>
          <p className='prata-regular text-3xl sm:text-4xl text-slate-900 font-bold'>
            {currentState}
          </p>
          <div className='flex items-center justify-center gap-2'>
            <span className='h-1 w-12 bg-indigo-600 rounded-full'></span>
            <span className='h-1 w-3 bg-pink-500 rounded-full'></span>
          </div>
        </div>

        {/* Form Inputs Container */}
        <div className='flex flex-col gap-4 pt-2'>
          {currentState === 'Login' ? null : (
            <div className='space-y-1.5'>
              <label className='text-xs font-bold uppercase tracking-wider text-gray-500 ml-1'>Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                className='w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all'
                placeholder='Enter your name'
                required
              />
            </div>
          )}

          <div className='space-y-1.5'>
            <label className='text-xs font-bold uppercase tracking-wider text-gray-500 ml-1'>Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              className='w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all'
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='space-y-1.5'>
            <label className='text-xs font-bold uppercase tracking-wider text-gray-500 ml-1'>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              className='w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all'
              placeholder='Enter your password'
              required
            />
          </div>
        </div>

        {/* Options Row */}
        <div className='flex justify-between items-center text-xs sm:text-sm font-medium text-gray-600 px-1'>
          <p className='cursor-pointer hover:text-indigo-600 transition-colors'>
            Forgot your password?
          </p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className='cursor-pointer text-indigo-600 font-bold hover:underline'
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className='cursor-pointer text-indigo-600 font-bold hover:underline'
            >
              Login Here
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-slate-900 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-2xl shadow-xl hover:bg-indigo-600 hover:shadow-indigo-200 transition-all duration-300 transform active:scale-95 mt-2'
        >
          {currentState === 'Login' ? 'Sign In' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

export default Login;