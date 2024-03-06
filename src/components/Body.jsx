import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/constant";
const Body = () => {
  return (
    <div className="restaurant-list">
      {resObj.map((ele) => (
        <RestaurantCard resData={ele} key={ele.info.id} />
      ))}
    </div>
  );
};

export default Body;
