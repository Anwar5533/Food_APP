import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div id="food-display" className="mt-[30px]">
      <h2 className="mb-[10px] text-[40px] text-base md:text-[2vw]">
        Top dishes near you
      </h2>
      <div className="mt-[30px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {food_list.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
