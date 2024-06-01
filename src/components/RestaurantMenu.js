import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuShimmer } from "./Shimmer";
import { IMG_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const [searchfood, setSearchfood] = useState("");
  const { restaurant, resTempMenu, setResTempMenu, error } = useRestaurantMenu(id); // Assuming `useRestaurantMenu` has `error` state
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!restaurant || !resTempMenu) {
    return <MenuShimmer />;
  }

  const filteredMenu = Object.values(resTempMenu).filter(res => 
    res?.card?.itemCards?.some(item => item?.card?.info?.name.toLowerCase().includes(searchfood.toLowerCase()))
  );

  return (
    <div className="max-w-[800px] mx-auto my-0">
      <div className="my-7 mx-0 flex gap-7">
        <img
          className="w-48 h-48"
          src={IMG_URL + restaurant?.cloudinaryImageId}
          alt="restaurant"
        />
        <div>
          <h1 className="font-medium">{restaurant?.name}</h1>
          <h3>{restaurant?.cuisines && restaurant?.cuisines.join(", ")}</h3>
          <p>{restaurant?.city}, {restaurant?.areaName}</p>
          <p>{restaurant?.locality}</p>
          <h4>{restaurant?.feeDetails?.message}</h4>
          <h2 className="font-medium">{restaurant?.avgRating} ★</h2>
          <h4 className="font-medium">{restaurant?.totalRatingsString}</h4>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchfood}
          onChange={(e) => setSearchfood(e.target.value)}
        />
        <button className="btn2" onClick={() => {}}>Search</button>
      </div>
      <h1>Menu</h1>
      {filteredMenu.map((res) =>
        res?.card?.itemCards?.map((item) => (
          <div key={item?.card?.info?.id} className="flex flex-col py-4 px-0">
            <div className="relative bg-[#e9e9e93b] h-40 flex flex-row justify-between py-5 px-0 rounded-md">
              <div>
                <h3>{item?.card?.info?.name}</h3>
                {item?.card?.info?.price ? (
                  <h4>Price: ₹{item?.card?.info?.price / 100}</h4>
                ) : item?.card?.info?.defaultPrice ? (
                  <h4>Price: ₹{item?.card?.info?.defaultPrice / 100}</h4>
                ) : (
                  <h4>Price information not available</h4>
                )}
                <p>{item?.card?.info?.description}</p>
                <div className="flex rounded-md absolute bottom-1 right-10">
                  <button
                    className="bg-white text-sm text-orange-700 font-bold px-8 py-1 border-2 border-r-0 border-slate-300 hover:border-slate-600"
                    onClick={() => addFoodItem(item)}
                  >
                    +
                  </button>
                  <button
                    className="bg-white text-sm text-orange-700 font-bold px-8 py-1 border-2 border-slate-300 hover:border-slate-600"
                    onClick={() => removeFoodItem(item)}
                  >
                    -
                  </button>
                </div>
              </div>
              {item?.card?.info?.imageId && (
                <img
                  className="w-48 bg-center"
                  src={IMG_URL + item?.card?.info?.imageId}
                  alt="menuImg"
                />
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantMenu;
