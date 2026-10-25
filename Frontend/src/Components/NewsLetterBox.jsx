import React from 'react';

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-indigo-100/60 shadow-sm text-center overflow-hidden">
        
        {/* Decorative Background Accent Glows */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-indigo-200/40 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-pink-200/40 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          
          {/* Discount Tag */}
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-200 px-3.5 py-1 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-wider">
            🎁 LIMITED TIME OFFER
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Subscribe Now & Get{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              20% OFF
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Join our newsletter to receive exclusive offers, early access to new collections, and trend updates directly to your inbox.
          </p>

          {/* Subscription Form */}
          <form 
            onSubmit={onSubmitHandler} 
            className="w-full sm:w-4/5 md:w-3/4 flex flex-col sm:flex-row items-center gap-2 mx-auto mt-8 bg-white p-2 rounded-2xl sm:rounded-full border border-gray-200/80 shadow-md focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all duration-200"
          >
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              required 
              className="w-full sm:flex-1 outline-none px-4 py-3 bg-transparent text-sm text-gray-800 placeholder-gray-400 font-medium"
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl sm:rounded-full shadow-md hover:bg-indigo-600 hover:shadow-indigo-200 transition-all duration-300 transform active:scale-95 flex-shrink-0"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default NewsLetterBox;