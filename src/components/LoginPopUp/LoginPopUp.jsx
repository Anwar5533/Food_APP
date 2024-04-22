import { useState } from "react";
import { assets } from "../../assets/assets";

export default function LoginPopUp({ setShowLogin }) {
  const [currState, setCurrentState] = useState("Sign-Up");

  return (
    <div className="absolute z-[1] grid h-[100%] w-[100%] bg-[#00000090]">
      <form className=" text-14px animate-ease-in-out duration-500px flex w-[max(23vw,330px)] flex-col gap-[25px] place-self-center rounded-[8px] bg-white px-[30px] py-[25px] text-[#808080]">
        <div className="flex items-center justify-between text-black">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-[16px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="rounded-[10px] border border-solid border-[#c9c9c9] p-[10px] outline-none"
              type="text"
              placeholder="Enter your name"
              required
            />
          )}
          <input
            className="rounded-[10px] border border-solid border-[#c9c9c9] p-[10px] outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            className=" rounded-[10px] border border-solid border-[#c9c9c9] p-[10px] outline-none"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="cursor-pointer rounded-[10px] bg-green-500 p-[10px] text-[15px] text-white ">
          {currState === "Sign-Up" ? "Create account" : "Login"}
        </button>
        <div className="mt-[-15px] flex items-start gap-[8px]">
          <input type="checkbox" required className="mt-[5px] cursor-pointer" />
          <p>
            By continuing, i agree to the terms and conditions of use & privacy
            policy
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("Sign-Up")}
              className="cursor-pointer text-[500] text-green-500"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-[500] text-green-500"
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}
