import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

    return (
        <div className='w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden'>
            
            {/* Background Accent Glow */}
            <div className='absolute -top-12 -right-12 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none'></div>
            <div className='absolute -bottom-12 -left-12 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none'></div>

            {/* Header with Title Component */}
            <div className='pb-4 mb-5 border-b border-slate-800'>
                <Title text1={'CART'} text2={' TOTALS'} />
            </div>

            {/* Breakdown Content */}
            <div className='flex flex-col gap-4 text-sm text-gray-300 pt-1'>
                
                {/* Subtotal */}
                <div className='flex justify-between items-center'>
                    <p className='font-medium text-gray-400'>Subtotal</p>
                    <p className='font-bold text-white text-base'>
                        {currency} {getCartAmount()}.00
                    </p>
                </div>

                <div className='h-[1px] w-full bg-slate-800'></div>

                {/* Shipping Fee */}
                <div className='flex justify-between items-center'>
                    <p className='font-medium text-gray-400'>Shipping Fee</p>
                    <p className='font-bold text-white text-base'>
                        {currency} {delivery_fee}.00
                    </p>
                </div>

                <div className='h-[1px] w-full bg-slate-800'></div>

                {/* Final Total Row */}
                <div className='flex justify-between items-center pt-2 pb-1'>
                    <b className='text-base sm:text-lg font-extrabold text-white'>Total</b>
                    <b className='text-lg sm:text-xl font-black text-slate-900 bg-white px-4 py-1.5 rounded-2xl shadow-lg'>
                        {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
                    </b>
                </div>

            </div>
        </div>
    )
}

export default CartTotal