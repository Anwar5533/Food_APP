import React from "react";

export default function Header() {
  return (
    <div className="relative  h-[653px]  bg-[url('/header_img.png')] bg-contain bg-no-repeat font-custom">
      <div className="max-w-1/2 animate-fadeIn absolute bottom-[150px] left-[115.2px] flex flex-col items-start gap-[28.8px]">
        <h2 className="text-[50px] font-bold text-white max-w-md ">
          Order Your favorite food here
        </h2>
        <p className="text-[19.2px] text-white max-w-3xl">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings 
          and elevate your dining experience, one delicious meal at a time.
        </p>
        <button className="rounded-[40px] border-none bg-white px-[40px] py-[18px] text-[19.2px] text-slate-600">
          View Menu
        </button>
      </div>
    </div>
  );
}
