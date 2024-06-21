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
      const apiUrl = `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D${latitude}%26lng%3D${longitude}%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING`;
      //const apiurl = `https://cors-proxy-ten-bice.vercel.app/api/proxy?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D${latitude}%26lng%3D${longitude}%26page_type%3DDESKTOP_WEB_LISTING`
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
