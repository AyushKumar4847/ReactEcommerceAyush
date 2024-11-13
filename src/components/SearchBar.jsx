import React, { useContext, useEffect, useState } from "react"; // Importing necessary hooks
import { ShopContext } from "../context/ShopContext"; // Importing ShopContext to access global state
import { assets } from "../assets/frontend_assets/assets"; // Importing assets (like icons)
import { useLocation } from "react-router-dom"; // Importing useLocation for routing context

export const SearchBar = () => {
  // Destructuring values from ShopContext
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  
  const [visible, setVisible] = useState(false); // State to manage the visibility of the search bar
  const location = useLocation(); // Getting the current route's location

  // useEffect hook to check the current URL and show/hide the search bar
  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true); // Show search bar if we're on the collection page
    } else {
      setVisible(false); // Hide search bar for other pages
    }
  }, [location]); // Dependency array ensures this runs on location change

  // Conditional rendering: the search bar is shown if showSearch is true and visible is true
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      
      {/* Search input area with a search icon */}
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search} // Binding input value to search state
          onChange={(e) => setSearch(e.target.value)} // Updating search state on input change
          className="flex-1 outline-none bg-inherit text-sm" // Styling the input
          type="text"
          placeholder="Search Items" // Placeholder text
        />
        <img className="w-4 cursor-pointer" src={assets.search_icon} alt="Search Icon" />
      </div>

      {/* Cross icon to close the search bar */}
      <img
        onClick={() => setShowSearch(false)} // Close the search bar when clicked
        className="w-3 inline cursor-pointer"
        src={assets.cross_icon} 
        alt="Close Search Bar"
      />
    </div>
  ) : null; // If conditions aren't met, return null (nothing is rendered)
};
