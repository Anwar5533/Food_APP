import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="mt-[100px] flex items-start justify-between gap-[50px]">
      <div className="w-[100%] max-w-[max(30%,500px)]" id="place-order-left">
        <p className="mb-[50px] text-[30px] font-semibold">
          Delivery Information
        </p>
        <div className="" id="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div id="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div id="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>
      <div className=" w-[100%] max-w-[max(40%,500px)]">
        <div className="flex flex-1 flex-col gap-4">
          <h2>Cart Total</h2>
          <div className="flex justify-between text-gray-500">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
          <button className="mt-[30px] w-60 cursor-pointer rounded-md bg-green-500 py-2 text-white">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
