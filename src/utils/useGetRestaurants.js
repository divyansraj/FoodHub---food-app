import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const useGetRestaurants = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const location = useSelector((state) => state.location);
  console.log("restaurantslist --> "+location);
  useEffect(() => {
     if (location && location.latitude && location.longitude)
      getRestaurants(location.latitude,location.longitude);
  },[location]);

  const getRestaurants = async (latitude, longitude) => {
    try {
      const apiUrl = 
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;
      const data = await fetch(apiUrl);
      const json = await data.json();

      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurants data :", error);
    }
  };

  return {
    filteredRestaurants,
    setFilteredRestaurants,
    allRestaurants,
  };
};

export default useGetRestaurants;
