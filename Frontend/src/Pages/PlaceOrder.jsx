import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_SECRET_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } });
          if (data.success) {
            navigate('/orders');
            setCartItems({});
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message || "Payment Verification Failed");
        }
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } });
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;

        case 'razorpay':
          const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);
          } else {
            toast.error(responseRazorpay.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 min-h-[80vh]"
    >
      {/* Left Column: Delivery Information */}
      <div className="flex flex-col gap-6 w-full lg:max-w-[500px]">
        <div className="text-2xl sm:text-3xl font-extrabold pb-3 border-b border-gray-100">
          <Title text1={"DELIVERY"} text2={" INFORMATION"} />
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
            type="email"
            placeholder="Email address"
          />

          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
            type="text"
            placeholder="Street / Address"
          />

          <div className="flex gap-4">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
              type="text"
              placeholder="City"
            />
            <input
              required
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
              type="text"
              placeholder="State"
            />
          </div>

          <div className="flex gap-4">
            <input
              required
              onChange={onChangeHandler}
              name="zipcode"
              value={formData.zipcode}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
              type="number"
              placeholder="Pincode"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
              type="text"
              placeholder="Country"
            />
          </div>

          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
            type="number"
            placeholder="Phone Number"
          />
        </div>
      </div>

      {/* Right Column: Order Totals & Payment Method */}
      <div className="flex-1 w-full lg:max-w-[450px] space-y-8">
        
        {/* Cart Total Summary */}
        <CartTotal />

        {/* Payment Method Selector */}
        <div className="space-y-4">
          <div className="text-xl sm:text-2xl font-extrabold pb-2 border-b border-gray-100">
            <Title text1={"PAYMENT"} text2={" METHOD"} />
          </div>

          <div className="flex flex-col gap-3">
            {/* Stripe Card */}
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                method === "stripe"
                  ? "border-indigo-600 bg-indigo-50/30 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    method === "stripe" ? "border-indigo-600 bg-indigo-600" : "border-gray-300"
                  }`}
                >
                  {method === "stripe" && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </span>
                <img className="h-5 object-contain" src={assets.stripe_logo} alt="Stripe" />
              </div>
            </div>

            {/* Razorpay Card */}
            <div
              onClick={() => setMethod("razorpay")}
              className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                method === "razorpay"
                  ? "border-indigo-600 bg-indigo-50/30 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    method === "razorpay" ? "border-indigo-600 bg-indigo-600" : "border-gray-300"
                  }`}
                >
                  {method === "razorpay" && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </span>
                <img className="h-5 object-contain" src={assets.razorpay_logo} alt="Razorpay" />
              </div>
            </div>

            {/* Cash on Delivery Card */}
            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                method === "cod"
                  ? "border-indigo-600 bg-indigo-50/30 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    method === "cod" ? "border-indigo-600 bg-indigo-600" : "border-gray-300"
                  }`}
                >
                  {method === "cod" && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </span>
                <p className="text-slate-800 text-xs sm:text-sm font-bold tracking-wider">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Place Order Submit Button */}
        <button
          type="submit"
          className="w-full bg-slate-900 text-white font-extrabold text-xs uppercase tracking-widest py-4.5 rounded-2xl shadow-xl hover:bg-indigo-600 hover:shadow-indigo-200 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
        >
          <span>PLACE ORDER</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

      </div>
    </form>
  );
};

export default PlaceOrder;