import React, { useContext } from 'react'; // Import React and useContext for accessing context
import { ShopContext } from '../context/ShopContext'; // Import the ShopContext to get cart and pricing details
import { Title } from './Title'; // Import the Title component for displaying the title

export const CartTotal = () => {
  // Destructure necessary values from the ShopContext: currency, delivery_fee, and getCartAmount function
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
      {/* Title for the Cart Total section */}
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>

      {/* Cart Summary */}
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        {/* Subtotal row */}
        <div className='flex justify-between'>
          <p>SubTotal</p>
          <p>{currency}{getCartAmount()}.00</p> {/* Displaying subtotal using currency and cart amount */}
        </div>
        <hr />

        {/* Shipping Fee row */}
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p> {/* Displaying shipping fee using currency */}
        </div>
        <hr />

        {/* Total row */}
        <div className='flex justify-between'>
          <b>Total</b>
          {/* Calculating the total by adding the subtotal and shipping fee */}
          <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
        </div>
      </div>
    </div>
  );
};
