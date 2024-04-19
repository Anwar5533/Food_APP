import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <div id="footer" className="mt-[100px] flex flex-col items-center gap-[20px] bg-[#323232] px-[8vw] py-[20px] pt-[80px] font-custom text-[#d9d9d9]">
      <div className="flex w-[100%] flex-col sm:flex-row sm:gap-[35px] md:flex-row md:gap-[35px]">
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-[40px] font-bold"> COMPANY LOGO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit
            odit saepe sequi ex, eaque corrupti, adipisci sed aspernatur
            explicabo temporibus eos! Pariatur, nihil mollitia?
          </p>
          <div className="flex items-start gap-[20px]">
            <img
              src={assets.facebook_icon}
              alt=""
              className="mr-[5px] w-[40px]"
            />
            <img
              src={assets.twitter_icon}
              alt=""
              className="mr-[5px] w-[40px]"
            />
            <img
              src={assets.linkedin_icon}
              alt=""
              className="mr-[5px] w-[40px]"
            />
          </div>
        </div>
        <div>
          <h2 className="flex flex-col items-start gap-[20px] text-[35px] font-bold text-white">
            COMPANY
          </h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">Home</li>
            <li className="mb-[10px] cursor-pointer">About Us</li>
            <li className="mb-[10px] cursor-pointer">Delivery</li>
            <li className="mb-[10px] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[35px] font-bold text-white">GET IN TOUCH</h2>
          <ul>
            <li className="mb-[10px]">+91-999999999</li>
            <li className="mb-[10px]">Contact@cloudfood.com</li>
          </ul>
        </div>
      </div>
      <hr className="bg-brown-600 m-[20px] h-[2px] w-[100%]" />
      <p className="sm:text-center">
        Copyright 2024 CloudFood.Com - All rights reserved.
      </p>
    </div>
  );
}
