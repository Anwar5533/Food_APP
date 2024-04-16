import React from "react";

export default function Header() {
  return (
    <div className="relative h-[350px] sm:h-[350px] md:h-[350px] lg:h-[570px]">
      <div className="absolute inset-0 bg-red-500 bg-[url('/header_img.png')] bg-contain bg-w-[100%] bg-no-repeat font-custom">
        <div className="max-w-1/2 absolute bottom-0 left-0 flex flex-col animate-fadeIn items-start gap-[28.8px] p-8 lg:static lg:left-0 lg:right-0 lg:w-1/2">
          <h2 className="max-w-md text-[36px] font-bold text-white">
            Order Your favorite food here
          </h2>
          <p className="max-w-3xl text-[16px] text-white">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="rounded-[30px] border-none bg-white px-[30px] py-[14px] text-[16px] text-slate-600">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}
