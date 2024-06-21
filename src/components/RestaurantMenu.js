import { useParams } from "react-router-dom";
import { useState } from "react";
import { MenuShimmer } from "./Shimmer";
import { IMG_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const [searchfood, setSearchfood] = useState("");
  const { restaurant, resTempMenu, setResTempMenu, loading, error } =
    useRestaurantMenu(id); // Destructure loading and error
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  if (loading) {
    return <MenuShimmer />; // Show shimmer while loading
  }

  if (error) {
    return (
      <div className="text-red-500">Error loading data: {error.message}</div>
    );
  }

  const filteredMenu = Object.values(resTempMenu).filter((res) =>
    res?.card?.itemCards?.some((item) =>
      item?.card?.info?.name.toLowerCase().includes(searchfood.toLowerCase())
    )
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex gap-4 my-7">
        <img
          className="w-48 h-48 rounded"
          src={IMG_URL + restaurant?.cloudinaryImageId}
          alt="restaurant"
        />
        <div>
          <h1 className="text-2xl font-semibold">{restaurant?.name}</h1>
          <h3 className="text-lg">
            {restaurant?.cuisines && restaurant?.cuisines.join(", ")}
          </h3>
          <p className="text-gray-600">
            {restaurant?.city}, {restaurant?.areaName}
          </p>
          <p className="text-gray-600">{restaurant?.locality}</p>
          <h4 className="text-gray-600">{restaurant?.feeDetails?.message}</h4>
          <h2 className="text-xl font-medium text-yellow-500">
            {restaurant?.avgRating} ★
          </h2>
          <h4 className="text-gray-600">{restaurant?.totalRatingsString}</h4>
        </div>
      </div>
      <div className="my-4">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Search for food..."
          value={searchfood}
          onChange={(e) => setSearchfood(e.target.value)}
        />
      </div>
      <h1 className="text-2xl font-semibold my-4">Menu</h1>
      {filteredMenu.length === 0 ? (
        <div className="text-gray-500">No items match your search.</div>
      ) : (
        filteredMenu.map((res) =>
          res?.card?.itemCards?.map((item) => (
            <div key={item?.card?.info?.id} className="my-4">
              <div className="relative bg-gray-100 p-4 rounded-md flex justify-between">
                <div>
                  <h3 className="text-lg font-medium">
                    {item?.card?.info?.name}
                  </h3>
                  {item?.card?.info?.price ? (
                    <h4 className="text-gray-600">
                      Price: ₹{item?.card?.info?.price / 100}
                    </h4>
                  ) : item?.card?.info?.defaultPrice ? (
                    <h4 className="text-gray-600">
                      Price: ₹{item?.card?.info?.defaultPrice / 100}
                    </h4>
                  ) : (
                    <h4 className="text-gray-600">
                      Price information not available
                    </h4>
                  )}
                  <p className="text-gray-600">
                    {item?.card?.info?.description}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <button
                      className="bg-white text-sm text-orange-700 font-bold px-4 py-2 border border-slate-300 hover:border-slate-600 rounded-l"
                      onClick={() => addFoodItem(item)}
                    >
                      +
                    </button>
                    <button
                      className="bg-white text-sm text-orange-700 font-bold px-4 py-2 border border-slate-300 hover:border-slate-600 rounded-r"
                      onClick={() => removeFoodItem(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
                {item?.card?.info?.imageId && (
                  <img
                    className="w-24 h-24 rounded object-cover"
                    src={IMG_URL + item?.card?.info?.imageId}
                    alt="menuImg"
                  />
                )}
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default RestaurantMenu;
