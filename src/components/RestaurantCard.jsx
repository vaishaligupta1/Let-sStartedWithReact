import { CARD_IMG_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="card">
      <img src={CARD_IMG_URL + resData.info.cloudinaryImageId} alt="img" />
      <h3>{name}</h3>
      <h4 className="cuisine">{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
