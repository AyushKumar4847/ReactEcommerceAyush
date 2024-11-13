import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "../components/Title";

export const Orders = () => {
  // Accessing data from ShopContext (products, currency, and cartItems)
  const { products, currency, cartItems } = useContext(ShopContext);

  // Filter products that exist in the cart
  // Only include products in the order list if their quantity is greater than 0
  const filteredProducts = products.filter((product) => {
    return cartItems[product._id] && Object.keys(cartItems[product._id]).some(size => cartItems[product._id][size] > 0);
  });

  // Generate the current date in the format "dd, Mon, yyyy"
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="border-t pt-16">
      {/* Displaying the title for the orders section */}
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {/* If there are filtered products, display them */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
            >
              {/* Displaying product image and details */}
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  {/* Display product price, total quantity in the cart, and available sizes */}
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p>{currency}{item.price}</p>
                    <p>
                      Quantity:{" "}
                      {Object.values(cartItems[item._id]).reduce((total, qty) => total + qty, 0)}
                    </p>
                    <p>Size(s): {Object.keys(cartItems[item._id]).join(", ")}</p>
                  </div>
                  {/* Display the current date */}
                  <p className="mt-2">
                    Date: <span className="text-gray-400">{formattedDate}</span>
                  </p>
                </div>
              </div>
              {/* Section to show order status and track button */}
              <div className="md:w-[45%] flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">Ready to Ship</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
              </div>
            </div>
          ))
        ) : (
          // Display a message if there are no items in the orders
          <p className="text-center text-gray-500 py-6">No items in your orders.</p>
        )}
      </div>
    </div>
  );
};
