import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>

    
    <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
   <p>“We started with a simple site on Shopify ten years ago and have been able to expand since then. The customer service is friendly, simple and accessible for small businesses that want to grow.”</p>
   <p>E-commerce (electronic commerce) is the activity of electronically buying or selling products on online services or over the Internet. </p>
   <p>“We started with a simple site on Shopify ten years ago and have been able to expand since then. The customer service is friendly, simple and accessible for small businesses that want to grow.”</p>
    <b className='text-gray-800'>Our Mission</b>
   <p>“To become essential to our customers by providing differentiated products and services to help them achieve their aspirations.”
      With a wide range of potential and current customers, American Express manages to help everyone feel included in its mission statement. It is offering products and services for all, no matter what your income level, elite status or dreams may be.</p>
     </div>
    </div>
    <div className='text-4xl py-4'>
      <Title text1={'WHY'}  text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
       <b>Quality Assurance :</b>
       <p className='text-gray-600'>The primary objectives of e-commerce quality control are to enhance customer satisfaction, minimize returns and complaints, and protect the reputation of the online business.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
       <b>Convenience :</b>
       <p className='text-gray-600'>One of the most significant advantages of ecommerce is the ability to reach a global audience.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
       <b>Exceptional Customer Service :</b>
       <p className='text-gray-600'>Ecommerce customer service is providing assistance to customers throughout their online shopping journey. It includes answering product queries, resolving issues, processing returns, and pro</p>
    </div>
    </div>
    <NewsLetterBox/>
    </div>
  )
}

export default About
