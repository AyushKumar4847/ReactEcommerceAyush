import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext"; // Importing context to access products
import { Title } from "./Title"; // Importing Title component for section heading
import { ProductItem } from "./ProductItem"; // Importing ProductItem component to render individual products

export const LatestCollection = () => {
  const { products } = useContext(ShopContext); // Accessing products from the ShopContext
  const [latestProducts, setLatestProducts] = useState([]); // State to hold the latest products

  // useEffect hook to set the latest products (top 10 products from the products array)
  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Set the first 10 products from the products array
  }, [products]); // The effect runs when the products array changes

  return (
    <div className="my-10">
      {/* Section Title */}
      <div className="text-center py-8 text-3xl">
        {/* Title component with custom text */}
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        {/* Description under the title */}
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          lorem ipsum is simply dummy text of printing and type setting
          industry.Lorem ipsum has been.
        </p>
      </div>

      {/* Rendering Products in a grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {/* Loop through latestProducts and render ProductItem for each product */}
        {latestProducts.map((item, index) => (
          <ProductItem 
            key={index} // Unique key for each product
            id={item._id} // Passing product id
            image={item.image} // Passing product image
            name={item.name} // Passing product name
            price={item.price} // Passing product price
          />
        ))}
      </div>
    </div>
  );
};
