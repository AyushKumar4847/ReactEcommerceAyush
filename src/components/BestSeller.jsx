import React, { useContext, useEffect, useState } from 'react'; // Importing necessary hooks
import { ShopContext } from '../context/ShopContext'; // Importing ShopContext to access global state
import { Title } from './Title'; // Importing Title component for displaying the section title
import { ProductItem } from './ProductItem'; // Importing ProductItem to render individual products

export const BestSeller = () => {
  // Destructuring products from ShopContext
  const { products } = useContext(ShopContext);
  
  // State to hold the filtered best-selling products
  const [bestSeller, setBestSeller] = useState([]);

  // useEffect to filter best-selling products when the component is mounted
  useEffect(() => {
    // Filtering products where 'bestseller' is true
    const bestProduct = products.filter((item) => item.bestseller);
    // Setting the first 5 best-selling products in the state
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]); // Dependency array ensures this runs when 'products' change
  
  return (
    <div className="my-10">
      {/* Title section */}
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLER'} /> {/* Title component for section header */}
        <p className="w-3/4 m-auto test-xs sm:text-sm md:text-base text-gray-600">
          lorem ipsum is simply dummy text of printing and type setting
          industry. Lorem ipsum has been.
        </p>
      </div>

      {/* Grid to display best-selling products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {/* Mapping through the bestSeller array and rendering ProductItem for each product */}
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
