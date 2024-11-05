import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link for navigation
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { RelatedProducts } from "../components/RelatedProducts";
import { MdOutlineArrowBackIos } from "react-icons/md";

export const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Stylish Back Button */}
      <div className="mb-8">
        <Link to="/collection">
          <button className="border-none flex items-center text-black py-2">
          <MdOutlineArrowBackIos /> Back to Collection
          </button>
        </Link>
      </div>
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-3 text-2xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-[100%]">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-6">
            <p className="underline">Select Sizes</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id,size)} className="bg-black text-white px-3 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-[4/5]" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product</p>
            <p>Cach on delivery available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description and review section */}
      <div>
        <div className="mt-20">
              <div className="flex">
                <b className="border px-5 py-3 text-sm">Description</b>
                <p  className="border px-5 py-3 text-sm">Reviews (122)</p>
              </div>
              <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                <p>An e-commerce website is an online platform that allows businesses to sell products or services directly to customers over the internet. It provides a digital storefront where users can browse items, view details, make purchases, and complete transactions securely. These websites often include features like product catalogs, search filters, customer reviews, and secure payment options, making online shopping accessible and convenient for users worldwide.</p>
                <p>An e-commerce website is an online platform where businesses and individuals can buy and sell products or services. It enables convenient, digital transactions, offering secure payment methods and streamlined shopping experiences.</p>
              </div>
        </div>
        {/* display related products */}
        <div>
          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        </div>
      </div>
      
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
  
};