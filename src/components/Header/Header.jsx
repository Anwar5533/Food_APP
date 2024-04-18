import React from "react";

export default function Header() {
  return (
    <div className="bg-w-[100%] relative mx-auto my-[30px] h-[34vw] bg-[url('/header_img.png')] bg-contain bg-no-repeat">
      <div className="absolute bottom-[10%] left-[6vw] flex max-w-[50%] animate-fadeIn flex-col items-start gap-[1.5vw] sm:max-w-[70%] lg:max-w-[45%]">
        <h2
          className="max-w-md font-semibold text-white"
          style={{ fontSize: "calc(4.5vw + 22px - 22px)" }}
        >
          Order Your favorite food here
        </h2>
        <p
          className="max-w-3xl text-[1vw] text-white "
        >
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="sm:{py-[2vw] px-[4vw]} rounded-[30px] border-none bg-white px-[2.3vw] py-[1vw] text-[16px] text-[max(1vw,13px)] text-slate-600">
          View Menu
        </button>
      </div>
    </div>
  );
}
