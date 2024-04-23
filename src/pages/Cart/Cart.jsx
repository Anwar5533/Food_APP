import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="mt-16">
      <div>
        <div className="grid grid-cols-6 items-center gap-4 text-sm text-gray-600">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="my-4 grid grid-cols-6 items-center gap-4 text-sm text-black">
                  <img src={item.image} alt="" className="col-span-1 w-12" />
                  <p className="col-span-1">{item.name}</p>
                  <p className="col-span-1">${item.price}</p>
                  <p className="col-span-1">{cartItems[item._id]}</p>
                  <p className="col-span-1">
                    ${item.price * cartItems[item._id]}
                  </p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="col-span-1 cursor-pointer"
                  >
                    X
                  </p>
                </div>
                <hr className="h-px bg-gray-300" />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="mt-10 flex justify-between gap-4" id="cart">
        <div className="flex flex-1 flex-col gap-4">
          <h2>Cart Total</h2>
          <div className="flex justify-between text-gray-500">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
          <button className="w-60 cursor-pointer rounded-md bg-green-500 py-2 text-white" onClick={()=>navigate("/order")} >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-gray-500">
              If you have a promo code, enter it here
            </p>
            <div className="mt-2 flex items-center justify-between rounded-md bg-gray-200">
              <input
                type="text"
                placeholder="promo code"
                className="bg-gray-200 pl-2"
              />
              <button className="w-32 rounded-md bg-black px-4 py-2 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
