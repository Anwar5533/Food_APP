import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div id="food-display" className="mt-[30px] ">
      <h2 className="mb-[10px] text-[max(2vw,24px)]">Top dishes near you</h2>
      <div className="mt-[30px] grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[30px] gap-y-[50px]">
        {food_list.map((item) => {
          {
            console.log(category, item.category);
          }
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
