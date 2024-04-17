import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

export default function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const itemCount = cartItems[id] || 0;

  return (
    <div className="w-100% delay-0.3s mb-16 animate-fadeIn rounded-lg shadow-md shadow-slate-200 transition hover:shadow-slate-500 ">
      <div className="relative">
        <img src={image} alt="" className="w-100% rounded-t-xl" />
        {!itemCount ? (
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
            className="absolute bottom-[15px] right-[15px] w-[35px] cursor-pointer rounded-[50%]"
          />
        ) : (
          <div className=" absolute bottom-[15px] right-[15px] flex items-center gap-[10px] rounded-[50px] bg-white p-[6px]">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-[30px] cursor-pointer"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-[30px] cursor-pointer"
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
