import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link for navigation
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { RelatedProducts } from "../components/RelatedProducts";
import { MdOutlineArrowBackIos } from "react-icons/md";

export const Product = () => {
  // Extracting productId from URL parameters
  const { productId } = useParams();
  
  // Accessing global state from ShopContext
  const { products, currency, addToCart } = useContext(ShopContext);
  
  // Local state for storing the current product data, selected image, and size
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  // Fetch the data of the product corresponding to productId from products array
  const fetchProductData = () => {
    // Iterating through products array to find the product with the given productId
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item); // Set product data
        setImage(item.image[0]); // Set the initial displayed image
        return null; // Break out of the loop
      }
    });
  };

  // Run fetchProductData when productId changes
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  // Conditional rendering to display product data when available
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Stylish Back Button for navigating to the collection page */}
      <div className="mb-8">
        <Link to="/collection">
          <button className="border-none flex items-center text-black py-2">
            <MdOutlineArrowBackIos /> Back to Collection
          </button>
        </Link>
      </div>
      {/* Main container displaying product details */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images Section */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnail images for product with horizontal scrolling on smaller screens */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)} // Set main image when a thumbnail is clicked
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          {/* Main Product Image Display */}
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Information Section */}
        <div className="flex-1">
          {/* Product Name */}
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          {/* Product Star Rating (static example) */}
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p> {/* Hardcoded number of reviews */}
          </div>
          {/* Product Price */}
          <p className="mt-3 text-2xl font-medium">
            {currency}
            {productData.price}
          </p>
          {/* Product Description */}
          <p className="mt-5 text-gray-500 md:w-[100%]">
            {productData.description}
          </p>
          {/* Size Selection Section */}
          <div className="flex flex-col gap-4 my-6">
            <p className="underline">Select Sizes</p>
            {/* Render size options as buttons */}
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)} // Set selected size
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : "" // Highlight selected size
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(productData._id, size)} // Add product to cart with selected size
            className="bg-black text-white px-3 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          {/* Divider and Additional Product Info */}
          <hr className="mt-8 sm:w-[4/5]" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product</p>
            <p>Cash on delivery available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews Section */}
      <div>
        <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              An e-commerce website is an online platform that allows businesses to sell products or services directly to customers over the internet. It provides a digital storefront where users can browse items, view details, make purchases, and complete transactions securely. These websites often include features like product catalogs, search filters, customer reviews, and secure payment options, making online shopping accessible and convenient for users worldwide.
            </p>
            <p>
              An e-commerce website is an online platform where businesses and individuals can buy and sell products or services. It enables convenient, digital transactions, offering secure payment methods and streamlined shopping experiences.
            </p>
          </div>
        </div>

        {/* Display Related Products */}
        <div>
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
    </div>
  ) : (
    // Render nothing when product data is not available
    <div className="opacity-0"></div>
  );
};
