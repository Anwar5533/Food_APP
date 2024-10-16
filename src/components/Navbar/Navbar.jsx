import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem"; // Import FoodItem component

export default function Navbar({ setShowLogin }) {
  const { getTotalCartAmount, food_list } = useContext(StoreContext); // Get food_list from context
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = () => {
    if (search.trim() === "") {
      setFilteredItems([]);
      return;
    }
    const filteredSearch = food_list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredItems(filteredSearch); // Update filteredItems state with the results
  };

  return (
    <div className="navbar-container sticky top-0 z-50 bg-white">
      <div className="mt-2 flex items-center justify-between px-4 font-custom lg:px-0">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={assets.logo}
              alt="logo"
              className="w-56 cursor-pointer md:w-[120px] lg:w-[140px]"
            />
          </Link>
        </div>
        <ul className="hidden gap-4 text-slate-600 md:gap-[15px] md:text-[16px] lg:flex lg:gap-20 lg:text-[17px]">
          <Link to="/" className="cursor-pointer hover:underline">
            Home
          </Link>
          <a href="#explore-menu" className="cursor-pointer hover:underline">
            Menu
          </a>
          <a href="#app-download" className="cursor-pointer hover:underline">
            Mobile-App
          </a>
          <a href="#footer" className="cursor-pointer hover:underline">
            Contact Us
          </a>
        </ul>

        <div className="flex items-center md:gap-[20px] lg:gap-[30px]">
          <input
            type="text"
            className="ml-2 rounded-lg border border-black py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search items..."
          />
          <button
            className="rounded-2xl border border-slate-400 bg-transparent px-4 px-[20px] py-2 transition duration-300 ease-in-out hover:bg-green-200 sm:rounded-2xl md:py-[7px] md:text-[15px] lg:px-[25px] lg:py-[8px]"
            onClick={handleSearch} // Trigger search on button click
          >
            Search
          </button>

          <div className="relative">
            <Link to="/cart">
              <img
                src={assets.basket_icon}
                alt="basket-icon"
                className="cursor-pointer md:w-[20px] lg:w-[22px]"
              />
            </Link>
            <div
              className={`absolute -right-2 -top-2 h-2 w-2 rounded-full bg-orange-600 ${
                getTotalCartAmount() === 0 ? "hidden" : ""
              }`}
            ></div>
          </div>

          <button
            onClick={() => setShowLogin(true)}
            className="rounded-2xl border border-slate-400 bg-transparent px-4 px-[20px] py-2 transition duration-300 ease-in-out hover:bg-green-200 sm:rounded-2xl md:py-[7px] md:text-[15px] lg:px-[25px] lg:py-[8px]"
          >
            Sign-In
          </button>
        </div>
      </div>

      {/* Display Search Results */}
      <div className="search-results mt-4 px-4">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[30px] gap-y-[50px]">
            {filteredItems.map((item) => (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          search && <p>"{search}"</p>
        )}
      </div>
    </div>
  );
}
