import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export default function Navbar({setShowLogin}) {
  return (
    <div className="mt-2 flex items-center justify-between px-4 font-custom lg:px-0 ">
      <div className="flex items-center">
        <img
          src={assets.logo}
          alt="logo"
          className="md:{w-[120px]} w-56 lg:w-[140px]"
        />
      </div>
      <ul className="lg:{gap-20[px] text-[17px]} md:{gap-[15px] text-[16px]} sm:{hidden} hidden gap-4 text-slate-600 lg:flex">
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
      <div className="lg:{gap-[30px]} flex items-center gap-4 md:gap-[20px]">
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="lg:2-[22px] block md:w-[20px] lg:inline-block"
        />
        <div className="relative">
          <img
            src={assets.basket_icon}
            alt="basket-icon"
            className="lg:2-[22px] md:w-[20px]"
          />
          <div className="absolute -right-2 -top-2 h-2 w-2 rounded-full bg-orange-600 "></div>
        </div>
        <button onClick={()=>setShowLogin(true)} className="lg:{py-[8px] px-[25px]} md:{py-[7px] text-[15px]} border border-slate-400 bg-transparent px-4 px-[20px] py-2 transition duration-300 ease-in-out hover:bg-green-200 sm:rounded-2xl rounded-2xl">
          Sign-In
        </button>
      </div>
    </div>
  );
}
