import React from "react";
import { Title } from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import {NewsLetterBox} from "../components/NewsLetterBox"

export const About = () => {
  return (
    <div>
      <div className="text-2xl text-centerpt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col lg:flex-row gap-16">
        <img
          className="w-full lg:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="text-sm flex flex-col justify-center gap-6 lg:w-2/4 text-gray-600">
          <p>
            Drip Store is your ultimate destination for high-quality,
            trendsetting clothing that combines modern design with unmatched
            comfort. Our collection is crafted to elevate your style, offering
            versatile and stylish options for any occasion. Discover pieces that
            make you stand out, all with a focus on quality and design.
          </p>
          <p>
            At Drip Store, we believe in blending contemporary style with
            everyday wearability to bring you uniquely crafted clothing for
            everyone. From streetwear staples to statement pieces, our garments
            are made to reflect the latest trends while offering a timeless
            appeal. Explore our collection and find your perfect style.
          </p>
          <b>Our Mission</b>
          <p>
            Our mission at Drip Store is to redefine fashion by offering
            high-quality, stylish clothing that resonates with individuality and
            confidence, empowering everyone to express their unique style
            effortlessly.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-xs mb-20">
        <div className="border px-8 md:px-10 py-6 sm:py-20 flex flex-col gap-5">
          <p>Quality Assurance: </p>
          <p className="text-gray-500">
            Ensure seamless shopping with our rigorous quality checks,
            delivering reliable products and satisfaction every time.
          </p>
        </div>
        <div className="border px-8 md:px-10 py-6 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-500">
            Discover effortless shopping at Drip Store! Trendy styles, seamless
            navigation, and quick checkout—fashion delivered to you.
          </p>
        </div>
        <div className="border px-8 md:px-10 py-6 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-500">
            Experience seamless shopping with 24/7 support, fast responses, and
            personalized assistance—our commitment to your satisfaction.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};
