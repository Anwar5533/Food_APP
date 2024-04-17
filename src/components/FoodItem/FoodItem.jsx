import { useState } from "react";
import { assets } from "../../assets/assets";

export default function FoodItem({ id, name, price, description, image }) {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="w-100% delay-0.3s mb-16 animate-fadeIn rounded-lg shadow-md shadow-slate-200 transition hover:shadow-slate-500 ">
      <div>
        <img src={image} alt="" className="w-100% rounded-t-xl" />
        {!itemCount ? (
          <img
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt=""
            className="cursor-pointer"
          />
        ) : (
          <div className="">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
              className="cursor-pointer"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className=" p-[20px] ">
        <div className=" mb-[10px] flex items-center justify-between ">
          <p className="text-[20px] font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
        </div>
        <p className="text-[12px] text-slate-500">{description}</p>
        <p className="my-[10px] text-[22px] font-semibold text-orange-400">
          ${price}
        </p>
      </div>
    </div>
  );
}
