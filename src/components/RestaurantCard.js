import { IMG_URL } from "../config";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const {user} = useContext(UserContext);
  return (
    <div className="w-64 flex justify-between gap-0.5 flex-col">
    
      <div className=" w-64 h-44 ">
        <img
          className="w-full h-full rounded-2xl"
          src={IMG_URL + cloudinaryImageId} alt="restaurant"
        ></img>
      </div>

      <h2 className=" font-semibold text-xl capitalize">{name}</h2>
      <h3>{cuisines && cuisines.join(", ")}</h3>
      <h3>{avgRating} ★</h3>
      <h4>{user.name} - {user.email}</h4>
    </div>
  );
};
export default RestaurantCard;
