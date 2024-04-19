import { assets } from "../../assets/assets";

export default function AppDownload() {
  return (
    <div id="app-download"
      className="mt-[80px] flex flex-col items-center  md:text-center"
      style={{ fontSize: "max(3vw, 20px)" }}
    >
      <p className="">
        For Better Experience Download <br /> Cloud-Kitchen App
      </p>
      <div
        className="mt-[40px] flex justify-center"
        style={{ gap: "max(2vw, 10px)" }}
      >
        <img
          src={assets.play_store}
          alt="Play Store"
          className="mr-4 max-w-[180px] transform cursor-pointer transition  hover:scale-105"
          style={{ width: "max(20vw, 120px)" }}
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className="mr-4 max-w-[180px] transform cursor-pointer transition  hover:scale-105"
          style={{ width: "max(20vw, 120px)" }}
        />
      </div>
    </div>
  );
}
