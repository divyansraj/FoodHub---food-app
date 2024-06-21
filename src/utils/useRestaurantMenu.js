import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../config";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState([]);
  const [resTempMenu, setResTempMenu] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    setLoading(true); // Set loading to true whenever the id changes
    getRestaurantMenu();
  }, [id]); // Add id to the dependency array

  async function getRestaurantMenu() {
    try {
      const data = await fetch(swiggy_menu_api_URL + id);
      const json = await data.json();
      setRestaurant(json?.data?.cards[2]?.card?.card?.info);
      setResTempMenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched or error occurs
    }
  }

  return { restaurant, resTempMenu, setResTempMenu, loading, error };
};

export default useRestaurantMenu;
