import React, { useContext, useState } from "react";
import { Title } from "../components/Title"; // Title component for displaying section headers
import { CartTotal } from "../components/CartTotal"; // CartTotal component to show the order total
import { assets } from "../assets/frontend_assets/assets"; // Asset imports for payment method logos
import { ShopContext } from "../context/ShopContext"; // Context import for global state and functions

export const PlaceOrder = () => {
  const [method, setMethod] = useState("cod"); // State to track the selected payment method, defaulting to 'Cash on Delivery'
  const { Navigate } = useContext(ShopContext); // `Navigate` function from ShopContext for navigation

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left side: Delivery Information form */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} /> {/* Header for delivery information section */}
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zip Code"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* Right side: Payment and order summary */}
      <div className="mt-8 w-full sm:max-w-[480px]">
        <div className="mt-8 min-w-70">
          <CartTotal /> {/* Displays order total and summary */}
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} /> {/* Header for payment methods */}
          {/* Payment method selection */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {/* Stripe payment method */}
            <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border-2 p-2 px-3 cursor-pointer sm:w-auto w-full">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>
            {/* Razorpay payment method */}
            <div onClick={() => setMethod("razorpay")} className="flex items-center gap-3 border-2 p-2 px-3 cursor-pointer sm:w-auto w-full">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
            </div>
            {/* Cash on Delivery payment method */}
            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border-2 p-2 px-3 cursor-pointer sm:w-auto w-full">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          {/* Order placement button */}
          <div className="w-full text-start mt-8">
            <button onClick={() => Navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};
