import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets"; // Importing assets for images/icons used in the navbar
import { Link, NavLink } from "react-router-dom"; // Importing Link and NavLink for navigation
import { ShopContext } from "../context/ShopContext"; // Importing ShopContext for managing shared state

// Navbar component definition
export const Navbar = () => {
  const [visible, setVisible] = useState(false); // State to control the visibility of the sidebar menu
  const { setShowSearch, getCartCount } = useContext(ShopContext); // Accessing context values: setShowSearch and getCartCount

  return (
    <div className="flex items-center justify-between py-5 font-medium"> {/* Container for the navbar */}
      {/* Logo with link to home page */}
      <Link to='/'>
        <h1 className="font-extrabold text-[0.8rem] md:text-xl text-gray-500">
          DRiP<span className="text-gray-700">StORE</span>
        </h1>
      </Link>

      {/* Navigation links (visible on larger screens) */}
      <ul className="hidden sm:flex gap-5 text-[0.7rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1"> {/* Navigation link to Home */}
          HOME{" "}
          <hr className="w-[50%] border-none h-[1.5px] bg-gray-700 hidden" /> {/* Hidden underline on hover */}
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1"> {/* Navigation link to Collection */}
          COLLECTION{" "}
          <hr className="w-[50%] border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1"> {/* Navigation link to About */}
          ABOUT{" "}
          <hr className="w-[50%] border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1"> {/* Navigation link to Contact */}
          CONTACT{" "}
          <hr className="w-[50%] border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right-side icons and buttons */}
      <div className="flex items-center gap-6">
        {/* Search icon */}
        <img onClick={() => setShowSearch(true)} className="w-3 sm:w-4 cursor-pointer" src={assets.search_icon} alt="" />

        {/* Profile icon with dropdown (visible on hover) */}
        <div className="group relative">
          <Link to="/login">
            <img className="w-4 cursor-pointer" src={assets.profile_icon} alt="" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4"> {/* Dropdown menu */}
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p> {/* Profile menu item */}
              <p className="cursor-pointer hover:text-black">Orders</p> {/* Orders menu item */}
              <p className="cursor-pointer hover:text-black">Log Out</p> {/* Log Out menu item */}
            </div>
          </div>
        </div>

        {/* Cart icon with item count */}
        <Link to="/cart" className="relative">
          <img className="w-4 min-w-4 sm:w-5 sm:min-w-5" src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-8px] sm:bottom-[-7px] w-3 sm:w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()} {/* Displaying the total count of items in the cart */}
          </p>
        </Link>

        {/* Menu icon for opening sidebar (visible on smaller screens) */}
        <img
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt=""
        />
      </div>

      {/* Sidebar menu for smaller screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Back button in the sidebar */}
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
            <img className="h-4 rotate-180 cursor-pointer" src={assets.dropdown_icon} alt="" />
            <p className="cursor-pointer">Back</p>
          </div>
          {/* Sidebar navigation links */}
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};
