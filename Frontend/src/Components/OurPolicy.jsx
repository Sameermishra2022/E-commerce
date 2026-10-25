import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      description: "We offer hassle-free exchange on all items"
    },
    {
      icon: assets.quality_icon,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy"
    },
    {
      icon: assets.support_img,
      title: "Best Customer Support",
      description: "We provide 24/7 dedicated customer support"
    }
  ];

  return (
    <section className="my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {policies.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center space-y-3"
          >
            {/* Icon Box Container */}
            <div className="w-16 h-16 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
            </div>

            {/* Policy Title */}
            <h3 className="font-bold text-gray-900 text-base sm:text-lg pt-1">
              {item.title}
            </h3>

            {/* Policy Description */}
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;