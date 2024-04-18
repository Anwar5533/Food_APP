import { menu_list } from "../../assets/assets";

export default function ExploreMenu({ category, setCategory }) {
  return (
    <div
      id="explore-menu"
      className="flex flex-col gap-5 font-custom"
    >
      <h1 className="text-4xl text-slate-700">Explore our menu</h1>
      <p className="max-w-3xl text-slate-600 lg:{max-w-[100%] text-[14px]}">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="no-scrollbar mx-0 my-5 flex items-center justify-between gap-10 overflow-x-scroll text-center">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name,
              )
            }
          >
            <img
              src={item.menu_image}
              alt=""
              className={`w-36 min-w-20 cursor-pointer rounded-[500px] transition delay-200"${category === item.menu_name ? "p-[2px] border-[4px] border-orange-500 " : ""}`}
            />
            <p className="mt-2 text-sm text-slate-500 md:text-[1.4vw]">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="mx-0 my-4 h-0.5 border-none bg-[#e2e2e2]" />
    </div>
  );
}
