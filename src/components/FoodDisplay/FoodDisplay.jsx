import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div id="food-display" className="mt-[30px]">
      <h2 className="text-[40px] mb-[10px] text-base md:text-[2vw]">
        Top dishes near you{" "}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mt-[30px]">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
