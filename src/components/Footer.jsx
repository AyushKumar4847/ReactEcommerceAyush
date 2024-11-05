import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <h1 className="mb-5 font-extrabold text-lg md:text-xl text-gray-500">
            DRiP<span className="text-gray-700">StORE</span>
          </h1>
          <p className="w-full md:2/3 text-gray-60">
            lorem ipsum is simply dummy text of printing and type setting
            industry.Lorem ipsum has been.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
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
            <li>+1 212-456-7890</li>
            <li>contact@dripstore.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright@2024 dripstore.com - All Rights Reserved</p>
      </div>
    </div>
  );
};
