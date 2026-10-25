import React, { useState } from 'react';
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendurl + '/api/user/admin', { email, password });
            if (response.data.success) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }       
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-slate-100 px-4'>
            {/* Glassmorphic Container with enhanced soft multi-layered shadow */}
            <div className='bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100 rounded-[3rem] px-10 py-12 w-full max-w-lg transition-all relative overflow-hidden'>
                
                {/* Soft gradient highlight */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-indigo-50/50 via-white/0 to-white/0 -translate-y-1/2 translate-x-1/2 rounded-full"></div>

                {/* Header with proper gap */}
                <div className='mb-10 text-center relative z-10'>
                    <h1 className='text-5xl font-extrabold text-[#111827] tracking-tighter'>Login</h1>
                    <div className='flex items-center justify-center gap-1.5 mt-3.5'>
                        <div className='w-14 h-[4px] bg-indigo-600 rounded-full'></div>
                        <div className='w-3.5 h-[4px] bg-[#ec4899] rounded-full'></div>
                    </div>
                </div>

                <form onSubmit={onSubmitHandler} className='space-y-6 relative z-10'>
                    
                    {/* EMAIL ADDRESS Field */}
                    <div className='space-y-2'>
                        <label className='text-xs font-black uppercase tracking-widest text-[#64748b] block pl-1.5'>EMAIL ADDRESS</label>
                        <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                            className='w-full px-6 py-4 bg-[#f8fafc] border border-slate-200/80 rounded-full text-slate-800 text-base font-semibold outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner' 
                            type="email" 
                            placeholder='Enter your email' 
                            required 
                        />
                    </div>

                    {/* PASSWORD Field */}
                    <div className='space-y-2'>
                        <label className='text-xs font-black uppercase tracking-widest text-[#64748b] block pl-1.5'>PASSWORD</label>
                        <input 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                            className='w-full px-6 py-4 bg-[#f8fafc] border border-slate-200/80 rounded-full text-slate-800 text-base font-semibold outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner' 
                            type="password" 
                            placeholder='Enter your password' 
                            required 
                        />
                    </div>

                    {/* Links Row */}
                    <div className='flex items-center justify-between text-sm sm:text-base px-2 pt-1'>
                        <p className='font-bold text-[#64748b] cursor-pointer hover:text-slate-900 transition-colors'>Forgot your password?</p>
                        <p className='font-bold text-indigo-600 cursor-pointer hover:underline'>Create Account</p>
                    </div>

                    {/* SIGN IN Button */}
                    <button 
                        className='w-full mt-8 py-5 px-6 rounded-full text-white font-black text-xs sm:text-sm bg-[#111827] hover:bg-slate-800 transition-all active:scale-95 shadow-md shadow-slate-900/10 cursor-pointer tracking-wider uppercase' 
                        type='submit'
                    >
                        SIGN IN
                    </button>

                </form>
            </div> 
        </div>
    );
};

export default Login;