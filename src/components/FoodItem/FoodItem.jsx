import { assets } from "../../assets/assets";

export default function FoodItem({ id, name, price, description, image }) {
  return (
    <div className="w-100% delay-0.3s mb-16 animate-fadeIn rounded-lg shadow-md shadow-slate-200 transition">
      <div>
        <img src={image} alt="" className="w-100% rounded-t-xl" />
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
