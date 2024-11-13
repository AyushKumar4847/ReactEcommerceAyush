import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // Importing context to access the currency
import { Link } from 'react-router-dom'; // Importing Link to navigate to individual product page

export const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext); // Accessing the currency from the context

  return (
    <>
      {/* Link to the individual product page using the product id */}
      <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        {/* Container for product image with hover effect */}
        <div className='overflow-hidden'>
          <img 
            className='hover:scale-110 transition ease-in-out' 
            src={image[0]} // Displaying the first image from the image array
            alt={name} // Using the product name as alt text for the image
          />
        </div>

        {/* Product name */}
        <p className='pt-3 pb-1 text-sm'>{name}</p>

        {/* Product price with the currency symbol */}
        <p className='text-sm font-medium'>{currency}{price}</p>
      </Link>
    </>
  );
};
