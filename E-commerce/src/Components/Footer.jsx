import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            No design skills needed. 
            You have complete control over the look and feel 
            of your website, from its layout, 
            to content and colors.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91-4565769879</li>
                <li>myName@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className="py-5 text-xl text-center font-sans text-[#722df1]">Designed by Sameer Mishra</p>
      </div>
    </div>
  );
};

export default Footer;
