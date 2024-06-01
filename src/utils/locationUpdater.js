import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "./locationSlice";

const LocationUpdater = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");
  const [updatedLocation, setUpdatedLocation] = useState(null);

  const handleUpdateLocation = async () => {
    try {
      const city = `${cityName}`;

      const response = await fetch(
        `https://geocode.maps.co/search?q=${city}&api_key=65aa496bece3c660149642rzcf54699`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch geocoding data");
      }

      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon, display_name } = data[0];
        dispatch(
          setLocation({ latitude: parseFloat(lat), longitude: parseFloat(lon) })
        );
        setUpdatedLocation(display_name);
      } else {
        console.error("No geocoding data found for the provided city name.");
        setUpdatedLocation(null);
      }
    } catch (error) {
      console.error("Error updating location:", error.message);
      setUpdatedLocation(null);
    }
  };

  return (
    <div>
      <div className="flex">
        {/* <label>City Name: </label> */}
        
        <input
          className=" px-2 py-2 border-2 rounded-r-none rounded-md border-stone-400  outline-0 text-black"
          type="text"
          placeholder="Search for city, zip code, area..."
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          className="px-2 rounded-md rounded-l-none text-black bg-slate-200 hover:bg-slate-300"
          onClick={handleUpdateLocation}
        >
          Update Location
        </button>
      </div>

      {updatedLocation && <p className="text-white">Location updated: {updatedLocation}</p>}
    </div>
  );
};

export default LocationUpdater;
